import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginForm, LoginResponse } from "@/data/types/auth.model";

const validate = (form: LoginForm): string | null => {
  if (!form.email.includes("@")) return "Enter a valid email.";
  if (!form.password) return "Password is required.";
  return null;
};

export const useLogin = () => {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name as keyof LoginForm]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data: LoginResponse = await res.json();

      if (res.ok && data.user) {
        if (data.token) {
          window.localStorage.setItem("authToken", data.token);
        }
        timerRef.current = setTimeout(() => navigate("/"), 500);
      } else {
        setError(data.message || "Login failed. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    error,
    loading,
    setError,
    handleChange,
    handleSubmit,
  };
};