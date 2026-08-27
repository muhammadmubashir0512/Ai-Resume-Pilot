import { create } from "zustand";

export const useResumeStore = create((set) => ({
  analysis: null,
  jobId: null,

  setAnalysis: (data) => set({ analysis: data }),

  setJobId: (id) => set({ jobId: id }),

  clearAnalysis: () => set({ analysis: null, jobId: null }),
}));
