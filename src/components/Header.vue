<script setup lang="ts">
import Button from './Button.vue';
import { useRouter } from 'vue-router';

const router = useRouter()

function handleClick(){
  router.push('/')
}
</script>

<template>
  <header class="w-screen bg-white border-b border-[#E5E8EB] ">
    <div class="flex h-18  items-center justify-between px-12 ">
    <div class="w-36 flex flex-row items-center gap-2 cursor-pointer" @click="handleClick()">
      <img class="w-4" src="../../public/logo.png" alt="">
      <h1 class="text-lg font-bold">Resume AI</h1>
    </div>
    <nav >
      <ul class="flex flex-row gap-10 items-center">
        <li class="font-medium text-[#0D141C]">Product</li>
        <li class="font-medium text-[#0D141C]">Pricing</li>
        <li class="font-medium text-[#0D141C]">Resources</li>
        <li class="flex flex-row gap-5">
          <Button text="Get started" type="primary" to="/register"></Button>
           <Button text="Log in" type="secundary" to="/login"></Button>
      </li>
      </ul>
    </nav>
    </div>

  </header>
</template>

<style scoped>
</style>
