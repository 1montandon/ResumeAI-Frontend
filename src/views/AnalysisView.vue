<script setup lang="ts">
import { onMounted, computed } from 'vue'
import Header from '@/components/HeaderComponent.vue'
import Button from '@/components/ButtonComponent.vue'
import { useAnalysisStore } from '@/stores/analysis'
import analysis from '@/services/analysis';

const props = defineProps<{ id: string | number }>()
const analysisStore = useAnalysisStore()

const compatibilityScore = computed(() =>
  analysisStore.analysis ? (analysisStore.analysis.score * 100) : 0,
)

const progressBarColor = computed(() => {
  const score = compatibilityScore.value
  if (score <= 50) return '#FF4D4F' // red
  if (score <= 70) return '#FAAD14' // yellow
  if (score <= 85) return '#52C41A' // green
  return '#0D80F2' // blue
})

onMounted(() => {
 analysisStore.getAnalysisById(props.id)
})
</script>

<template>
  <Header />
  <div class="flex flex-col px-60 h-svh justify-start gap-8 mt-10">
    <div class="flex flex-col gap-3">
      <h1 class="font-bold text-3xl text-[#0D141C]">Resume Analysis</h1>
      <p class="text-[#4A739C]">
        Review the compatibility analysis between your resume and the job description.
      </p>
    </div>
    <div class="flex flex-col gap-3">
      <div class="flex justify-between">
        <h4 class="text-[#0D141C]">Compatibility Score</h4>
        <h4 class="text-[#0D141C]">{{ compatibilityScore + '%' }}</h4>
      </div>
      <div class="bg-[#CFDBE8] rounded-full h-2.5 w-full">
        <div
          class="h-2.5 rounded-full"
          :style="{ width: compatibilityScore + '%', backgroundColor: progressBarColor }"
        ></div>
      </div>
      <p class="text-[#4A739C]">
        Review the compatibility analysis between your resume and the job description.
      </p>
    </div>
    <div class="flex flex-col gap-3" v-if="analysisStore.analysis && analysisStore.analysis.strengths">
      <h2 class="font-bold text-2xl text-[#0D141C]">Strengths</h2>
      <ul v-for="strength in JSON.parse(analysisStore.analysis.strengths)">
        <li>{{ strength }}</li>
      </ul>
    </div>
  </div>
</template>
