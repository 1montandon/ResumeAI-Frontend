<script setup lang="ts">
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore()
const route = ref('')
if(authStore.isLogged){
  route.value = "/"
}
else{
  route.value = '/login'
}
</script>
<template>
<Header></Header>
<div class="flex flex-col px-60 h-svh items-center justify-center gap-8">
  <div class="md:w-3xl text-center">
    <h1 class="md:text-6xl  font-black text-[#0D141C]">
      Unlock Your Career Potential with ResumeAI!
    </h1>
  </div>
  <div class="md:w-3xl text-center">
  <p class="text-base text-[#0D141C]">
    Our AI-powered platform analyzes your resume against job descriptions, providing actionable insights to enhance your application and increase your chances of landing your dream job.
  </p>
  </div>
  <Button type="primary" :to="route" text="Analyze Now"></Button>
</div>
</template>

<style scoped>

</style>
