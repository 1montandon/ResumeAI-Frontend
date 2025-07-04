<script setup lang="ts">
import { computed } from 'vue'
import Button from './ButtonComponent.vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const router = useRouter()
const authStore = useAuthStore()
function handleClick() {
  router.push('/')
}

// Example isLogged check (replace with your actual auth logic)
const isLogged = computed(() => {
  return authStore.isLogged
})
function logout() {
  authStore.logout()
  alert('Logged Out. Redirecting to home page...')
  router.push('/')
}
</script>

<template>
  <header class="w-screen bg-white border-b border-[#E5E8EB]">
    <div class="flex h-18 items-center justify-between px-12">
      <div class="w-36 flex flex-row items-center gap-2 cursor-pointer" @click="handleClick()">
        <img class="w-4" src="../../public/logo.png" alt="" />
        <h1 class="text-lg font-bold">Resume AI</h1>
      </div>
      <nav>
        <ul class="flex flex-row gap-10 items-center">
          <li class="font-medium text-[#0D141C]">Product</li>
          <li class="font-medium text-[#0D141C]">Pricing</li>
          <li class="font-medium text-[#0D141C]">Resources</li>
          <li class="flex flex-row gap-5">
            <template v-if="!isLogged">
              <Button text="Get started" type="primary" to="/register"></Button>
              <Button text="Log in" type="secundary" to="/login"></Button>
            </template>
            <template v-else>
              <Button text="Dashboard" type="primary" to="/dashboard"></Button>
              <Button text="Log out" type="secundary" @click="logout()"></Button>
            </template>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped></style>
