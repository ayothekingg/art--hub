import React from "react";
import RegisterPage from "@/auth/RegisterPage";
import { useRegister } from "@/hooks/useRegister";

const Register: React.FC = () => {
  const { form, error, success, loading, handleChange, handleSubmit } = useRegister();

  return (
    <RegisterPage
      form={form}
      error={error}
      success={success}
      loading={loading}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;