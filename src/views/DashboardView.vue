<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '@/components/HeaderComponent.vue'
import Button from '@/components/ButtonComponent.vue'
import { useAuthStore } from '@/stores/auth'
import { useAnalysisStore } from '@/stores/analysis'

const authStore = useAuthStore()
const analysisStore = useAnalysisStore()
onMounted(() => {
  analysisStore.getAnalyses()
})

import { computed } from 'vue'

const compatibilityScore = computed(() =>
  analysisStore.analyses.reduce((sum, analysis) => sum + analysis.score * 100, 0),
)
function progressBarColor(score: number) {
  if (score <= 50) return '#FF4D4F' // red
  if (score <= 70) return '#FAAD14' // yellow
  if (score <= 85) return '#52C41A' // green
  return '#0D80F2' // blue
}

</script>

<template>
  <Header />
  <div class="flex flex-col px-60 h-svh justify-start gap-8 mt-10">
    <div class="flex flex-col gap-3">
      <h1 class="font-bold text-3xl text-[#0D141C]">Dashboard</h1>
      <p class="text-[#4A739C]">
        Welcome back {{ authStore.user.username }}, Here's a summary of your recent activity.
      </p>
    </div>
    <div class="flex flex-row justify-between">
      <div class="w-80 h-24 b-1 rounded-xl border border-[#CFDBE8] p-6">
        <p class="font-medium text-base text-[#0D141C]">Total Analysis</p>
        <h3 class="font-bold text-2xl text-[#0D141C]">{{ analysisStore.analyses.length }}</h3>
      </div>
      <div class="w-80 h-24 b-1 rounded-xl border border-[#CFDBE8] p-6">
        <p class="font-medium text-base text-[#0D141C]">Average Compatibility Score</p>
        <h3 class="font-bold text-2xl text-[#0D141C]">
          {{ (compatibilityScore / analysisStore.analyses.length).toFixed(2) }} %
        </h3>
      </div>
      <div class="w-80 h-24 b-1 rounded-xl border border-[#CFDBE8] p-6">
        <p class="font-medium text-base text-[#0D141C]">Analysis Generated</p>
        <h3 class="font-bold text-2xl text-[#0D141C]">{{ analysisStore.analyses.length }}</h3>
      </div>
    </div>
    <div class="flex flex-col gap-8 items-center">
      <h2 class="font-bold text-2xl self-start text-[#0D141C]">Recent Analysis</h2>
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
          <tbody class="text-[#0D141C]">
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
                      class=" h-2.5 rounded-full"
                      :style="{ width: analysis.score * 100 + '%', backgroundColor: progressBarColor(analysis.score * 100) }"
                    ></div>
                  </div>
                  <p>{{ analysis.score * 100 }}%</p>
                </div>
              </td>
              <td class="px-6 py-8 font-medium text-[#0D141C] whitespace-nowrap">
                <router-link :to="`/analysis/${analysis.id}`" class="text-blue-600 hover:underline"
                  >View Analysis</router-link
                >
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
