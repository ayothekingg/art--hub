import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import type { RegisterForm, RegisterResponse } from "@/data/types/auth.model";

const validate = (form: RegisterForm): string | null => {
  if (!form.name.trim()) return "Name is required.";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(form.email)) return "Enter a valid email.";
  if (form.password.length < 8)
    return "Password must be at least 8 characters.";
  if (form.password !== form.confirmPassword) return "Passwords do not match.";
  return null;
};

export const useRegister = () => {
  const [form, setForm] = useState<RegisterForm>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const timerRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => clearTimeout(timerRef.current);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name as keyof RegisterForm]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const validationError = validate(form);
    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          password: form.password,
        }),
      });

      const data: RegisterResponse = await res.json();

      if (res.ok) {
        if (data && (data as any).token) {
          window.localStorage.setItem("token", (data as any).token);
        }
        setSuccess("Registration successful!");
        timerRef.current = setTimeout(() => navigate("/"), 1000);
      } else {
        setError(data?.message || "Registration failed. Please try again.");
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
    success,
    loading,
    setError,
    setSuccess,
    handleChange,
    handleSubmit,
  };
};
