export interface LoginUserResponse{
  accessToken: string,
}
export interface LoginUserDTO{
  username: string,
  password: string,
}
export interface RegisterUserDTO{
  email: string,
  username: string,
  password: string,
}
export interface RegisterUserResponse{
  id: string,
  email: string,
  username: string
}

import type { Analysis } from "./analysis";

export interface getMeUser{
  id: string;
  email: string;
  username: string;
  password: string;
  analyses?: Analysis[];
  createdAt: Date;
}
