import React, { useState } from "react";
import RegisterPage from "../../auth/RegisterPage";
import type { RegisterResponse } from "../../data/types/auth.model";

const Register: React.FC = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirmPassword: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    let data: RegisterResponse;
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      data = await res.json();
    } catch {
      setError("Server error. Please try again.");
      return;
    }
    if (data.success) setSuccess("Registration successful!");
    else setError(data.message || "Registration failed");
  };

  return (
    <RegisterPage
      form={form}
      error={error}
      user={success ? { name: form.name, email: form.email } : null}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Register;