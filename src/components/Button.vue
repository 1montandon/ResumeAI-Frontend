<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  type: {
    type: String,
    default: 'primary', // 'primary' or 'secondary'
  },
  to: {
    type: String,
    default: '',
  },
  text: {
    type: String,
    required: true,
  },
})

const router = useRouter()

const buttonClass = computed(() =>
  props.type === 'primary'
    ? 'bg-[#0D80F2] px-7 py-3 rounded-lg font-semibold text-sm text-[#F7FAFC] hover:cursor-pointer active:scale-90 ease-out duration-300'
    : 'bg-[#E8EDF5] px-7 py-3 rounded-lg font-semibold text-sm text-[#0D141C] hover:cursor-pointer active:scale-90 ease-out duration-300',
)

function handleClick() {
  if (props.to) {
    router.push(props.to)
  }
}
</script>
<template>
  <button :class="buttonClass" @click="handleClick">
    {{ text }}
  </button>
</template>
