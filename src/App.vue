<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useAnalysisStore } from '@/stores/analysis'
import { useAuthStore } from '@/stores/auth'
import { storeToRefs } from 'pinia'

const analysisStore = useAnalysisStore()
const authStore = useAuthStore()


</script>

<template>
  <div v-if="analysisStore.isLoading || authStore.isLoading" class="loading-overlay">
    Loading...
  </div>
  <RouterView />
</template>

<style scoped>
.loading-overlay {
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(255,255,255,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  z-index: 9999;
}
</style>
