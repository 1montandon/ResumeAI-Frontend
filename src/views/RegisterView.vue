<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth' // Adjust path if needed
import { useRouter } from 'vue-router'
import Header from '@/components/HeaderComponent.vue'
import Button from '@/components/ButtonComponent.vue'

const username = ref('')
const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()
const handleRegister = async () => {
  try {
    const res = await authStore.registerUser({
      username: username.value,
      password: password.value,
      email: email.value,
    })
    alert('Register successful! Redirecting to login page...')
    router.push('/login')
  } catch (error) {
    alert('Erro ao registrar.')
  }
}
</script>
<template>
  <Header></Header>
  <div class="flex flex-col px-60 h-svh items-center justify-center">
    <form
      @submit.prevent="handleRegister"
      class="flex flex-col justify-center items-center gap-6 w-md"
    >
      <h1 class="text-4xl font-bold text-[#0D141C]">Get started for free</h1>
      <div class="flex flex-col gap-2">
        <label for="username" class="text-[#0D141C]">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]"
          placeholder="Username"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="email" class="text-[#0D141C]">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]"
          placeholder="Email"
        />
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-[#0D141C]">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]"
          placeholder="Password"
        />
      </div>
      <Button text="Register" block></Button>
      <p class="text-[#4A739C] text-center">
        By creating an account, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  </div>
</template>
<style scoped></style>
