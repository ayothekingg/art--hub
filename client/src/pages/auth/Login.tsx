import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginPage from "../../auth/LoginPage";

const Login: React.FC = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setUser(null);
    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      setUser(data.user);
      navigate("/"); // Redirect to landing page
    } else {
      setError(data.message || "Login failed");
    }
  };

  return (
    <LoginPage
      form={form}
      error={error}
      user={user}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
};

export default Login;