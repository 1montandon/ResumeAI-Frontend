import api from "@/plugins/api";
import type { LoginUserResponse, LoginUserDTO, RegisterUserDTO, RegisterUserResponse, getMeUser} from "@/types/auth";


class AuthService {
  async loginUser(user: LoginUserDTO): Promise<string>{
    try{
      const response = await api.post<LoginUserResponse>('login/', user);
      return response.data.accessToken
    }
    catch(error){
      throw error;
    }
  };
  async registerUser(user: RegisterUserDTO): Promise<RegisterUserResponse>{
    try{
      const response = await api.post<RegisterUserResponse>('register/', user)
      return response.data
    }
    catch(error){
      throw error
    }
  };
  async getMeUser(): Promise<getMeUser>{
    try{
      const response = await api.get('user/');
      return response.data
    }
    catch(error){
      throw error
    }

  }
}

export default new AuthService()
