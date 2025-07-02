<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '@/stores/auth'; // Adjust path if needed
import { useRouter, useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';

const username = ref('');
const password = ref('');
const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const handleLogin = async () => {
  try {
    await authStore.loginUser({username: username.value, password: password.value});
    // 👇 Verifica se há redirecionamento salvo
    const redirect = route.query.redirect as string || '/dashboard'; // fallback opcional

    router.push(redirect);
    alert("Login successful! Redirecting...");
  } catch (error) {
    // Handle error (show message, etc.)
    alert('Login failed. Please check your credentials.');
  }
};
</script>

<template>
  <Header></Header>
  <div class="flex flex-col px-60 h-svh items-center justify-center ">
    <form @submit.prevent="handleLogin" class="flex flex-col justify-center items-center gap-6 w-md">
      <h1 class="text-4xl font-bold text-[#0D141C]">Log in to your account</h1>
      <div class="flex flex-col gap-2">
        <label for="username" class="text-[#0D141C]">Username</label>
        <input
          id="username"
          v-model="username"
          type="text"
          class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]"
          placeholder="username"
          required
        >
      </div>
      <div class="flex flex-col gap-2">
        <label for="password" class="text-[#0D141C]">Password</label>
        <input
          id="password"
          v-model="password"
          type="password"
          class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]"
          placeholder="Password"
          required
        >
      </div>
      <p class="text-[#4A739C]">Forgot password?</p>
      <Button text="Log In" block></Button>
      <p class="text-[#4A739C]">
        Dont have an account? <router-link to="/register">Sign Up</router-link>
      </p>
    </form>
  </div>
</template>
