<script setup lang="ts">
import { onMounted } from 'vue'
import { useAnalysisStore } from '@/stores/analysis'

// Define os props corretamente
const props = defineProps<{
  id: string
}>()

const analysisStore = useAnalysisStore()

async function fetchAnalysis() {
  try {
    await analysisStore.getAnalysisById(props.id)
  } catch (err) {
    console.error('Failed to fetch analysis:', err)
  }
}

onMounted(fetchAnalysis)
</script>

<template>
  {{ analysisStore.analysis }}
</template>
