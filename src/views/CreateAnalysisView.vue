<script setup lang="ts">
import { reactive, ref } from 'vue'
import Header from '@/components/HeaderComponent.vue'
import Button from '@/components/ButtonComponent.vue'
import { useAuthStore } from '@/stores/auth'
import { useAnalysisStore } from '@/stores/analysis'
import type { CreateAnalysis } from '@/types/analysis'
import { useRouter } from 'vue-router'
import { useDropZone } from '@vueuse/core'

const dropZoneRef = ref<HTMLDivElement>()

function onDrop(files: File[] | null) {
  console.log(files)
  if (files && files.length > 0) {
    analysisToCreate.resume = files[0]
  }
  // called when files are dropped on zone
}
const { isOverDropZone } = useDropZone(dropZoneRef, {
  onDrop,
  // specify the types of data to be received.
  // dataTypes: ['application/pdf', ],
  // control multi-file drop
  multiple: false,
  // whether to prevent default behavior for unhandled events
  preventDefaultForUnhandled: false,
})

const analysisToCreate: CreateAnalysis = reactive({
  resume: null,
  description: '',
})

const authStore = useAuthStore()
const analysisStore = useAnalysisStore()

const router = useRouter()
async function createAnalysis() {
  try {
    const response = await analysisStore.createAnalysis(analysisToCreate)
    alert('Analysis successful! Redirecting to home page...')
    router.push('/dashboard')
  } catch (err) {
    console.error('Erro ao criar análises:', err)
  }
}
</script>

<template>
  <Header />
  <div class="flex flex-col px-60 h-svh justify-start gap-8 mt-10">
    <h1 class="font-bold text-3xl self-center">Upload Your Resume and Job Description</h1>
    <p class="text-[#0D141C] self-center">
      Drag and drop your files here, or click to select them from your computer. We support PDF,
      DOC, and DOCX formats.
    </p>

    <div class="flex flex-col gap-3">
      <div
        v-if="analysisToCreate.resume == null"
        class="w-full h-56 flex flex-col justify-center items-center border-dashed border-2 bg-gray-50 border-[#CFDBE8] border-blue-200 hover:bg-sky-50 duration-200 rounded-lg"
        ref="dropZoneRef"
      >
        <h2 class="text-[#0D141C] text-xl font-bold">Drag and drop your resume here</h2>
        <input
          type="file"
          class="text-[#0D141C]"
          placeholder="Or click to browse"
          @change="
            (e) => {
              if (e.target.files && e.target.files.length > 0)
                analysisToCreate.resume = e.target.files[0]
            }
          "
        />
      </div>
      <div
        v-else
        class="w-full h-56 flex flex-col justify-center items-center border-dashed border-2 border-[#08fa31] rounded-lg bg-green-50"
        ref="dropZoneRef"
      >
        <h2 class="text-[#0D141C] text-xl font-bold">Successfuly Uploaded</h2>
        <p class="text-[#0D141C]" @click="analysisToCreate.resume = null">Or upload again</p>
      </div>
    </div>
    <div class="flex flex-col gap-3">
      <div
        class="w-full h-56 flex flex-col justify-start items-start border-[#CFDBE8] rounded-lg"
        ref="dropZoneRef"
      >
        <h2 class="text-[#0D141C] text-xl font-semibold ml-2 mt-2">
          Job description here (In Progress...)
        </h2>
        <!-- <input
            type="text"
            class="text-[#0D141C] w-full h-full"
            placeholder="click"
            v-model="analysisToCreate.description"
          /> -->
        <textarea
          class="w-full h-full border border-gray-400"
          name=""
          id=""
          v-model="analysisToCreate.description"
        >
        </textarea>
      </div>

      <div class="self-center">
        <Button type="primary" to="" text="Analyze" :block="false" @click="createAnalysis"></Button>
      </div>
    </div>
  </div>
</template>
