import api from '@/plugins/api'
import type { CreateAnalysis, Analysis } from '@/types/analysis'

class AnalysisService {
  async getAnalyses(): Promise<Analysis[]> {
    try {
      const response = await api.get<Analysis[]>('analysis/')
      console.log(response.data)
      return response.data
    } catch (error) {
      throw error
    }
  }
  async createAnalysis(analysis: FormData): Promise<Analysis> {
    try {
      const response = await api.post<Analysis>('analysis/', analysis)

      return response.data
    } catch (error) {
      throw error
    }
  }
  async getAnalysisById(analysisId: string | number): Promise<Analysis> {
    try {
      const response = await api.get<Analysis>(`analysis/${analysisId}/`)
      console.log(response)
      return response.data
    } catch (error) {
      throw error
    }
  }
}

export default new AnalysisService()
