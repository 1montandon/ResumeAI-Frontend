import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import AnalysisService from "@/services/analysis";
import type { Analysis, CreateAnalysis, ParsedAnalysis } from "@/types/analysis";

const analysisService = AnalysisService;

export const useAnalysisStore = defineStore('analysis', () => {
  const state = reactive({
    analyses: [] as Analysis[],
    isLoading: false,
  })

  const analyses = computed(() => state.analyses);
  const isLoading = computed(() => state.isLoading);

  const clearAnalyses = () => {
    state.analyses = [];
  }

//   function parseAnalyses(data: Analysis[]): ParsedAnalysis[] {
//   return data.map((item) => ({
//     id: item.id,
//     jobDescription: item.jobDescription,
//     score: item.score,
//     strengths: JSON.parse(item.strengths),
//     weaknesses: JSON.parse(item.weaknesses),
//     overview: item.overview,
//     resumeUrl: item.resumeUrl,
//     userId: item.userId,
//     createdAt: new Date(item.createdAt),
//   }));
// }

  const getAnalyses = async () => {
    state.isLoading = true;
    try {
      const response = await analysisService.getAnalyses();
      state.analyses = response;
      return response;
    } catch (error) {
      console.log(error);
      clearAnalyses();
    } finally {
      state.isLoading = false;
    }
  }
  const createAnalysis = async (analysis: CreateAnalysis) => {
    state.isLoading = true;
    try {
      const formData = new FormData();
      if (analysis.resume) {
        formData.append('resume', analysis.resume);
      }
      formData.append('description', analysis.description);
      console.log(formData)

      const response = await analysisService.createAnalysis(formData);
      // Optionally update local state
      await getAnalyses();
      return response;
    } catch (error) {
      console.log(error);
    } finally {
      state.isLoading = false;
    }
  }

  return { analyses, isLoading, getAnalyses, clearAnalyses, state , createAnalysis};
});


