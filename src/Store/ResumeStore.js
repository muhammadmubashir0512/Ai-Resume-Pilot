import { create } from "zustand";

export const useResumeStore = create((set) => ({
  analysis: null,
  improvedResult: null,

  setAnalysis: (data) => set({ analysis: data }),

  setImprovedResult: (data) => set({ improvedResult: data }),

  clearAnalysis: () => set({ analysis: null, jobId: null }),
}));
