export const interviewQuestions = [
  {
    id: 1,
    question:
      "Tell me about yourself and your experience as a software engineer.",
    category: "Introduction",
    difficulty: "Easy",
    timeLimit: 120,
  },
  {
    id: 2,
    question:
      "Describe a challenging technical problem you faced and how you solved it.",
    category: "Problem Solving",
    difficulty: "Medium",
    timeLimit: 180,
  },
  {
    id: 3,
    question:
      "How would you design a scalable REST API for a large application?",
    category: "System Design",
    difficulty: "Hard",
    timeLimit: 180,
  },
  {
    id: 4,
    question:
      "What is the difference between SQL and NoSQL databases, and when would you choose each?",
    category: "Technical Knowledge",
    difficulty: "Medium",
    timeLimit: 150,
  },
  {
    id: 5,
    question:
      "Explain how you would improve the performance of a slow web application.",
    category: "Performance",
    difficulty: "Medium",
    timeLimit: 150,
  },
  {
    id: 6,
    question:
      "Tell me about a time when you disagreed with a team member. How did you handle it?",
    category: "Behavioral",
    difficulty: "Medium",
    timeLimit: 150,
  },
  {
    id: 7,
    question:
      "How do you approach debugging a production issue that you cannot reproduce locally?",
    category: "Problem Solving",
    difficulty: "Hard",
    timeLimit: 180,
  },
  {
    id: 8,
    question: "What steps would you take to secure a Node.js backend API?",
    category: "Security",
    difficulty: "Hard",
    timeLimit: 180,
  },
  {
    id: 9,
    question:
      "Describe one of your projects and explain the most important technical decision you made.",
    category: "Project Experience",
    difficulty: "Medium",
    timeLimit: 150,
  },
  {
    id: 10,
    question: "Why do you think you are a good fit for this role?",
    category: "Behavioral",
    difficulty: "Easy",
    timeLimit: 120,
  },
];

export const interviewResultData = {
  interviewInfo: [
    {
      id: 1,
      label: "ROLE",
      body: "Senior Software Engineer",
      color: "#DAE2FD",
    },
    { id: 2, label: "DIFFICULTY", body: "Hard", color: "#FFB4AB" },
    { id: 3, label: "TYPE", body: "Technical", color: "#4CD7F6" },
  ],

  overallScore: 82,
  performance: {
    title: "Good Performance",
    percentile: "Top 24%",
    summary:
      "You demonstrated a solid understanding of core concepts and articulated your thoughts clearly. While your technical depth is commendable, refining your communication in high-pressure scenarios will elevate your overall impact.",
    comparison: "Better than 76% of simulated candidates",
  },

  performanceBreakdown: [
    {
      id: 1,
      title: "Technical Knowledge",
      score: 86,
    },
    {
      id: 2,
      title: "Problem Solving",
      score: 79,
    },
    {
      id: 3,
      title: "Communication",
      score: 84,
    },
    {
      id: 4,
      title: "Confidence",
      score: 78,
    },
  ],
};
