import { reactive, computed } from "vue";
import { defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import AuthService from "@/services/auth";
import type { LoginUserDTO, RegisterUserDTO } from "@/types/auth";

const authService = AuthService;
export const useAuthStore = defineStore('auth', () => {
  const state = {
    user: useStorage('user', {}),
    access: useStorage('access', ''),
    isLoading: false,
    isLogged: useStorage('isLogged', false),
  }


  const user = computed(() =>
    state.user.value
  )
  const token = computed(() =>
    state.access.value
  )
  const isLoading = computed(() =>
    state.isLoading
  )
  const isLogged = computed(() =>
    state.isLogged.value
  )

  const clearToken = () => {
    state.access.value = ''
    state.isLogged.value = false
  }
  const setToken = (token: string) => {
    state.access.value = token
    state.isLogged.value = true
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
      state.user.value = await authService.getMeUser()
      state.isLogged.value = true
      state.isLoading = false
    }
  }

  const registerUser = async (user: RegisterUserDTO) => {
    clearToken();
    state.isLoading = true;
    try {
      const response = await authService.registerUser(user)
      // notify.success('Login realizado com sucesso!')
      return response
    }
    catch (error) {
      console.log(error)
    }
    finally {
      state.isLoading = false;
    }
  }

  const getMeUser = async () => {
    state.isLoading = true
    try {
      const response = await authService.getMeUser()
      state.user.value = response
      return response
    } catch (error) {
      console.log(error)
    } finally {
      state.isLoading = false
    }
  }


  return { loginUser, registerUser, getMeUser, user, token, isLoading, isLogged, state }
})
