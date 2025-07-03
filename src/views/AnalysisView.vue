<script setup lang="ts">
import { ref, onMounted, computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Button from '@/components/Button.vue'
import { useAnalysisStore } from '@/stores/analysis'
import type { Analysis } from '@/types/analysis'

const props = defineProps<{ id: string | number }>()
const analysisStore = useAnalysisStore()



const compatibilityScore = computed(() =>
  analysisStore.analysis ? (analysisStore.analysis.score * 100).toFixed(2) : '0.00'
)

onMounted(() =>{
  analysisStore.getAnalysisById(props.id)
})
</script>

<template>
  <Header />
  <div class="flex flex-col px-60 h-svh justify-start gap-8 mt-10" >
    <div class="flex flex-col gap-3">
      <h1 class="font-bold text-3xl">Analysis #{{ analysisStore.analysis?.id }}</h1>
      <p class="text-[#4A739C]">
        Job Description: {{ analysisStore.analysis?.jobDescription }}
      </p>
      <p class="text-[#4A739C]">
        Overview: {{ analysisStore.analysis?.overview }}
      </p>
      <div class="w-80 h-24 b-1 rounded-xl border border-[#CFDBE8] p-6 mt-4">
        <p class="font-medium text-base">Compatibility Score</p>
        <h3 class="font-bold text-2xl">{{ compatibilityScore }} %</h3>
        <div class="bg-[#CFDBE8] rounded-full h-2.5 w-24 mt-2">
          <div
            class="bg-[#0D80F2] h-2.5 rounded-full"
            :style="{ width: compatibilityScore + '%' }"
          ></div>
        </div>
      </div>
    </div>
    <div class="flex justify-end">
      <Button type="primary" to="/analysis" text="Back to Analyses" :block="false"></Button>
    </div>
  </div>

</template>
