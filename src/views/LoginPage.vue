<script setup lang="ts">
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
</script>
<template>
<Header></Header>
<div class="h-screen flex items-center justify-center bg-red">
  <div class="flex flex-col w-md">
    <h1 class="text-4xl font-bold text-[#0D141C]">Log in to your account</h1>
    <form action="" class="flex flex-col justify-center items-center">
      <div>
        <label for="" class="text-[#0D141C]">Email</label>
        <input type="email" class="w-md h-10 border-2 border-[#CFDBE8] rounded-lg p-6 placeholder-[#4A739C]" placeholder="Email">
      </div>
      <div>
        <label for="" class="text-[#0D141C]">Password</label>
        <input type="password" class="w-md h-10 border-2 border-[#CFDBE8] rounded-lg p-6 placeholder-[#4A739C]" placeholder="Password">
      </div>
      <p>Forgot passoword?</p>
      <div class="flex">
              <Button text="Log In" ></Button>

      </div>
      <p>Dont have and account? Sign Up</p>
    </form>
  </div>
</div>

</template>
<style scoped>
</style>
