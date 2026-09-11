import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const SESSION_LENGTH = 8 * 60;

export const useInterviewSession = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const resumeId = location.state?.resumeId;
  const targetRole = location.state?.targetRole;
  const difficulty = location.state?.difficulty;
  const interviewType = location.state?.interviewType;
  const language = location.state?.language || "English";
  const resume = location.state?.resume;

  const [secondsLeft, setSecondsLeft] = useState(SESSION_LENGTH);
  const [aiSpeaking, setAiSpeaking] = useState(false);
  const [listening, setListening] = useState(false);

  const [interviewId, setInterviewId] = useState(null);
  const [question, setQuestion] = useState("");
  const [questionIndex, setQuestionIndex] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(5);

  const [meta, setMeta] = useState({
    role: "",
    type: "",
    difficulty: "",
    language: "English",
  });

  const [transcript, setTranscript] = useState([]);
  const [error, setError] = useState(null);

  const audioRef = useRef(null);
  const interviewStartedRef = useRef(false);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  useEffect(() => {
    if (secondsLeft <= 0) return;

    const timer = setInterval(() => {
      setSecondsLeft((s) => s - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [secondsLeft]);

  useEffect(() => {
    if (interviewStartedRef.current) return;

    if (!resumeId && !resume) {
      setError("No resume selected. Please go back and select a resume.");
      return;
    }

    interviewStartedRef.current = true;

    startInterview();

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }
    };
  }, [resumeId, resume]);

  const startInterview = async () => {
    try {
      const formData = new FormData();

      if (resumeId) {
        formData.append("resumeId", resumeId);
      } else {
        if (!resume) {
          throw new Error("Resume is required");
        }

        if (!targetRole) {
          throw new Error("Target role is required");
        }

        formData.append("resume", resume);
        formData.append("targetRole", targetRole);
        formData.append("difficulty", difficulty || "easy");
        formData.append("interviewType", interviewType || "behavioral");
        formData.append("language", language || "English");
      }

      const response = await api.post("/interview/start", formData);

      const interview = response.data.data;

      setInterviewId(interview._id);

      setMeta({
        role: interview.jobTitle,
        type: interview.interviewType,
        difficulty: interview.difficulty,
        language: interview.language,
      });

      setTotalQuestions(interview.maxQuestions);

      await waitForFirstQuestion(interview._id);
    } catch (err) {
      console.log("Start interview error:", err);
      setError(
        err?.response?.data?.message ||
          err?.message ||
          "Could not start the interview. Please try again.",
      );
    }
  };

  const endInterview = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }

    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
    }

    if (mediaRecorderRef.current?.stream) {
      mediaRecorderRef.current.stream
        .getTracks()
        .forEach((track) => track.stop());
    }

    setAiSpeaking(false);
    setListening(false);
  };

  const waitForFirstQuestion = async (id) => {
    const maxAttempts = 30;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const response = await api.get(`/interview/status/${id}`);

        const statusData = response.data.data;

        if (statusData.status === "completed") {
          const firstQuestion = statusData.result?.question;

          if (!firstQuestion) {
            throw new Error("First question missing");
          }

          setQuestion(firstQuestion);

          setQuestionIndex(statusData.currentQuestion ?? 0);

          setTranscript([
            {
              speaker: "ai",
              text: firstQuestion,
            },
          ]);

          await speakQuestion(firstQuestion);

          return;
        }
        if (statusData.status === "failed") {
          const errorMessage =
            statusData.error || "Interview question generation failed";

          alert(errorMessage);
          endInterview();
          navigate("/Mock-Interview/preference");

          return;
        }

        await new Promise((resolve) => setTimeout(resolve, 1000));
      } catch (err) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        throw err;
      }
    }

    throw new Error("Interview question generation timeout");
  };

  const speakQuestion = async (text) => {
    if (!text) return;

    try {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current = null;
      }

      setAiSpeaking(true);
      setListening(false);

      const response = await api.post(
        "/interview/speak",
        { text },
        { responseType: "blob" },
      );

      const audioBlob = new Blob([response.data], {
        type: "audio/wav",
      });

      const audioUrl = URL.createObjectURL(audioBlob);
      const audio = new Audio(audioUrl);

      audioRef.current = audio;

      audio.onended = () => {
        setAiSpeaking(false);
        URL.revokeObjectURL(audioUrl);

        if (audioRef.current === audio) {
          audioRef.current = null;
        }
      };

      audio.onerror = () => {
        setAiSpeaking(false);
        URL.revokeObjectURL(audioUrl);

        if (audioRef.current === audio) {
          audioRef.current = null;
        }
      };

      await audio.play();
    } catch (err) {
      console.log("TTS error:", err);
      setAiSpeaking(false);
    }
  };

  const startRecording = async () => {
    try {
      if (aiSpeaking) return;

      const stream = await navigator.mediaDevices.getUserMedia({
        audio: true,
      });

      const mediaRecorder = new MediaRecorder(stream);

      audioChunksRef.current = [];
      mediaRecorderRef.current = mediaRecorder;

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());

        const audioBlob = new Blob(audioChunksRef.current, {
          type: mediaRecorder.mimeType || "audio/webm",
        });

        await submitAnswer(audioBlob);
      };

      mediaRecorder.start();
      setListening(true);
    } catch (err) {
      console.log("Microphone error:", err);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current?.state === "recording") {
      mediaRecorderRef.current.stop();
      setListening(false);
    }
  };

  const submitAnswer = async (audioBlob) => {
    try {
      setListening(false);
      setAiSpeaking(true);

      const formData = new FormData();

      formData.append("audio", audioBlob, "answer.webm");
      formData.append("currentQuestion", questionIndex);

      const response = await api.post(
        `/interview/answer/${interviewId}`,
        formData,
      );

      const result = response.data.data;

      setTranscript((prev) => [
        ...prev,
        {
          speaker: "user",
          text: result.answer || "Answer recorded",
        },
      ]);

      if (result.interviewCompleted) {
        setAiSpeaking(false);

        navigate("/Mock-Interview/result", {
          state: {
            interviewResult: result.parsedResult.finalEvaluation,
            interviewInfo: {
              jobTitle: meta.role,
              interviewType: meta.type,
              difficulty: meta.difficulty,
              language: meta.language,
            },
          },
        });

        return;
      }

      const nextQuestion = result.parsedResult?.nextQuestion;

      if (!nextQuestion) {
        setAiSpeaking(false);
        return;
      }

      const nextQuestionIndex = questionIndex + 1;

      setQuestion(nextQuestion);
      setQuestionIndex(nextQuestionIndex);

      setTranscript((prev) => [
        ...prev,
        {
          speaker: "ai",
          text: nextQuestion,
        },
      ]);

      await speakQuestion(nextQuestion);
    } catch (err) {
      console.log("Answer submission error:", err);
      setAiSpeaking(false);
      setListening(false);
    }
  };

  const handleMicToggle = () => {
    if (aiSpeaking) return;

    if (listening) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return {
    secondsLeft,
    aiSpeaking,
    endInterview,
    listening,
    question,
    questionIndex,
    totalQuestions,
    meta,
    transcript,
    error,
    handleMicToggle,
  };
};
