<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import { useAuthStore } from '@/stores/auth'
import { useAnalysisStore } from '@/stores/analysis'
import type { Analysis } from '@/types/analysis'

const authStore = useAuthStore()
const analysisStore = useAnalysisStore()
onMounted(() => {
  analysisStore.getAnalyses()
})

async function fetchAnalyses() {
  try {
    const response = await analysisStore.getAnalyses()
    console.log('Análises:', response)
  } catch (err) {
    console.error('Erro ao buscar análises:', err)
  }
}
import { computed } from 'vue'

const compatibilityScore = computed(() =>
  analysisStore.analyses.reduce((sum, analysis) => sum + analysis.score * 100, 0),
)
</script>

<template>
  <Header />
  <div class="flex flex-col px-60 h-svh justify-start gap-8 mt-10">
    <div class="flex flex-col gap-3">
      <h1 class="font-bold text-3xl">Dashboard</h1>
      {{ analysisStore.isLoading }}
      <p class="text-[#4A739C]">
        Welcome back {{ authStore.user.username }}, Here's a summary of your recent activity.
      </p>
    </div>
    <div class="flex flex-row justify-between">
      <div class="w-80 h-24 b-1 rounded-xl border border-[#CFDBE8] p-6">
        <p class="font-medium text-base">Total Analysis</p>
        <h3 class="font-bold text-2xl">{{ analysisStore.analyses.length }}</h3>
      </div>
      <div class="w-80 h-24 b-1 rounded-xl border border-[#CFDBE8] p-6">
        <p class="font-medium text-base">Average Compatibility Score</p>
        <h3 class="font-bold text-2xl">
          {{ (compatibilityScore / analysisStore.analyses.length).toFixed(2) }} %
        </h3>
      </div>
      <div class="w-80 h-24 b-1 rounded-xl border border-[#CFDBE8] p-6">
        <p class="font-medium text-base">Analysis Generated</p>
        <h3 class="font-bold text-2xl">{{ analysisStore.analyses.length }}</h3>
      </div>
    </div>
    <div class="flex flex-col gap-8 items-center">
      <h2 class="font-bold text-2xl self-start">Recent Analysis</h2>
      <div class="overflow-hidden rounded-lg border border-[#CFDBE8] w-full flex justify-center">
        <table class="text-sm text-left w-full">
          <thead class="text-xs text-[#0D141C] bg-[#F7FAFC]">
            <tr>
              <th class="px-6 py-3 text-center">Id</th>
              <th class="px-6 py-3 text-center">Job Desc</th>
              <th class="px-6 py-3 text-center">Overview</th>
              <th class="px-6 py-3 text-center">Compatibility Score</th>
              <th class="px-6 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="analysis in analysisStore.analyses"
              :key="analysis.id"
              class="bg-[#F7FAFC] border-b border-t border-[#CFDBE8] text-center"
            >
              <td class="px-6 py-8 font-medium text-[#0D141C] whitespace-nowrap text-center">
                {{ analysis.id }}
              </td>
              <td class="px-6 py-8 font-medium text-[#0D141C] whitespace-nowrap text-center">
                {{ analysis.jobDescription.slice(0, 45) }}...
              </td>
              <td class="px-6 py-8 font-medium text-[#0D141C] whitespace-nowrap text-center">
                {{ analysis.overview.slice(0, 45) }}...
              </td>
              <td class="px-6 py-8 font-medium text-[#0D141C] whitespace-nowrap text-center">
                <div class="flex items-center gap-2 justify-center">
                  <div class="bg-[#CFDBE8] rounded-full h-2.5 w-24">
                    <div
                      class="bg-[#0D80F2] h-2.5 rounded-full"
                      :style="{ width: analysis.score * 100 + '%' }"
                    ></div>
                  </div>
                  <p>{{ analysis.score * 100 }}%</p>
                </div>
              </td>
              <td class="px-6 py-8 font-medium text-[#0D141C] whitespace-nowrap">
                <router-link :to="`/analysis/${analysis.id}`" class="text-blue-600 hover:underline">View Analysis</router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="flex justify-end">
      <Button type="primary" to="/analysis" text="Start new Analysis" :block="false"></Button>
    </div>
  </div>
</template>
