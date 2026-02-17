import type { ChangeEvent, FormEvent } from "react";

export interface RegisterForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface RegisterPageProps {
  form: RegisterForm;
  error: string;
  success: string;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
}

export interface RegisterResponse {
  message: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

export interface LoginForm {
  email: string;
  password: string;
}

export interface LoginPageProps {
  form: LoginForm;
  error: string;
  loading: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
}


export interface LoginResponse {
  message?: string;
  user?: {
    id: string;
    name: string;
    email: string;
  };
  token?: string;
}