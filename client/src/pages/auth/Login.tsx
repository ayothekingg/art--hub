import React from "react";
import LoginPage from "@/auth/LoginPage";
import { useLogin } from "@/hooks/useLogin";

const Login: React.FC = () => {
  const { form, error, loading, handleChange, handleSubmit } = useLogin();

  return (
    <LoginPage
      form={form}
      error={error}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;