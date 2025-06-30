import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import AuthService from "@/services/auth";
import type { LoginUserDTO } from "@/types/auth";

const authService = AuthService;
export const useAuthStore = defineStore('auth', () => {
  const state = useStorage('userStorage', {
    user: {},
    access: '',
    isLoading: false,
    isLogged: false,
  })

  const user = computed(() => {
    state.value.user
  })
  const token = computed(() => {
    state.value.access
  })
  const isLoading = computed(() =>{
    state.value.isLoading
  })
  const isLogged = computed(() =>{
    state.value.isLogged
  })

  const clearToken = () =>{
    state.value.access = ''
    state.value.isLogged = false
  }
  const setToken = (token: string) => {
    state.value.access = token
    state.value.isLogged = true
  }
  const loginUser = async (user: LoginUserDTO) => {
    clearToken()
    state.value.isLoading = true
    try {
      const response = await authService.loginUser(user)
      setToken(response)
      // notify.success('Login realizado com sucesso!')
      return response
    } catch (error) {
      // notify.error('Falha no login', error)
      clearToken()
    } finally {
      state.value.isLoading = false
    }
  }

  return { loginUser, state }
})
