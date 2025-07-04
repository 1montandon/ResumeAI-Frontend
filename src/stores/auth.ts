import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import AuthService from '@/services/auth'
import type { LoginUserDTO, RegisterUserDTO } from '@/types/auth'
import { useAnalysisStore } from './analysis'

const authService = AuthService
export const useAuthStore = defineStore('auth', () => {
  const state = reactive({
    user: useStorage('user', {}),
    access: useStorage('access', ''),
    isLoading: false,
    isLogged: useStorage('isLogged', false),
  })

  const user = computed(() => state.user)
  const token = computed(() => state.access)
  const isLoading = computed(() => state.isLoading)
  const isLogged = computed(() => state.isLogged)

  const clearToken = () => {
    state.access = ''
    state.isLogged = false
  }
  const setToken = (token: string) => {
    state.access = token
    state.isLogged = true
  }

  const loginUser = async (user: LoginUserDTO) => {
    clearToken()
    state.isLoading = true
    try {
      const response = await authService.loginUser(user)
      setToken(response)
      // notify.success('Login realizado com sucesso!')
      return response
    } catch (error) {
      console.log(error)
      clearToken()
    } finally {
      state.user = await authService.getMeUser()
      state.isLogged = true
      state.isLoading = false
    }
  }

  const registerUser = async (user: RegisterUserDTO) => {
    clearToken()
    state.isLoading = true
    try {
      const response = await authService.registerUser(user)
      // notify.success('Login realizado com sucesso!')
      return response
    } catch (error) {
      console.log(error)
    } finally {
      state.isLoading = false
    }
  }

  const getMeUser = async () => {
    state.isLoading = true
    try {
      const response = await authService.getMeUser()
      state.user = response
      return response
    } catch (error) {
      console.log(error)
    } finally {
      state.isLoading = false
    }
  }
  // dentro do método onde for usar:
  const logout = () => {
    const analysisStore = useAnalysisStore() // ✅ aqui pode
    analysisStore.clearAnalyses()
    clearToken()
    state.user = {}
  }

  return { loginUser, registerUser, getMeUser, user, token, isLoading, isLogged, state, logout }
})
