import api from "@/plugins/api";
import type { LoginUserResponse, LoginUserDTO } from "@/types/auth";


class AuthService {
  async loginUser(user: LoginUserDTO): Promise<string>{
    try{
      const response = await api.post<LoginUserResponse>('login/', user)
      console.log(response)
      return response.data.accessToken
    }
    catch(error){
      throw error;
    }
  }
}

export default new AuthService()
