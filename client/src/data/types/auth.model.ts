export interface RegisterPageProps {
  form: {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
  };
  error: string;
  user: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}


export interface LoginPageProps {
  form: { email: string; password: string };
  error: string;
  user: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}