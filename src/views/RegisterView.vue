<script setup lang="ts">
import Header from '@/components/Header.vue';
import Button from '@/components/Button.vue';
</script>
<template>
<Header></Header>
<div class="flex flex-col px-60 h-svh items-center justify-center ">
    <form action="" class="flex flex-col justify-center items-center gap-6 w-md">
          <h1 class="text-4xl font-bold text-[#0D141C]">Get started for free</h1>

      <div class="flex flex-col gap-2">
        <label for="" class="text-[#0D141C]">Full Name</label>
        <input type="text" class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]" placeholder="Full Name">
      </div>
      <div class="flex flex-col gap-2">
        <label for="" class="text-[#0D141C]">Email</label>
        <input type="email" class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]" placeholder="Email">
      </div>
      <div class="flex flex-col gap-2">
        <label for="" class="text-[#0D141C]">Password</label>
        <input type="password" class="w-md h-10 border-2 text-[#0D141C] border-[#CFDBE8] rounded-lg px-4 py-6 placeholder-[#4A739C]" placeholder="Password">
      </div>
      <Button text="Register"  block></Button>
      <p class="text-[#4A739C] text-center">By creating an account, you agree to our Terms of Service and Privacy Policy.</p>
    </form>

</div>

</template>
<style scoped>
</style>
