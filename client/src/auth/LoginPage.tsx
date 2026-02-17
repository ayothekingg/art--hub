import React from "react";
import loginImg from "../assets/auth/login.png";
import type { LoginPageProps } from "../data/types/auth.model";

const LoginPage: React.FC<LoginPageProps> = ({
  form,
  error,
  loading,
  handleChange,
  handleSubmit,
}) => (
  <div className="relative h-screen app-bg flex items-start justify-start overflow-x-hidden overflow-y-auto">
    <div className="flex w-full h-full">
      {/* Left: Form */}
      <div className="w-full md:w-1/2 p-4 md:mt-20 mt-60 flex flex-col justify-start items-start md:ml-30 relative z-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:gap-8 gap-5 w-full"
        >
          <h2 className="text-[45px] md:text-[40px] clash-extrabold mb-55 md:mb-4 app-text md:mt-0 -mt-40 text-start ml-35 md:ml-18">
            <span className="md:hidden">Login</span>
            <span className="hidden md:inline">Welcome Back!!</span>
          </h2>
          <input
            name="email"
            placeholder="Email@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            className="text-[#999999] dark:text-search-input bg-search-input dark:bg-[#616161] rounded-4xl w-full h-12.5 md:w-115 md:h-19 pl-6 md:text-[26px] text-[18px] focus:outline-none"
          />
          <input
            name="password"
            placeholder="Enter your password"
            value={form.password}
            onChange={handleChange}
            required
            type="password"
            className="text-[#999999] dark:text-search-input bg-search-input dark:bg-[#616161] rounded-4xl w-full h-12.5 md:w-115 md:h-19 pl-6 md:text-[26px] text-[18px] focus:outline-none"
          />

          {/* Forgot password link */}
          <div className="md:mb-5 mb-15 w-full flex md:ml-10 ml-28 justify-center">
            <a href="/forgot-password" className="md:text-[25px] text-[18px] satoshi-medium">
              Forgot Password?
            </a>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#272727] rounded-4xl text-white md:text-[30px] text-[20px] satoshi-bold w-full h-12.5 md:w-115 md:h-19 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && <div className="text-red-500">{error}</div>}

          {/* Sign up link */}
          <div className="md:-ml-8 w-full flex justify-center">
            <span className="text-[#888] text-[18px] md:text-[22px] satoshi-medium">
              Don&apos;t have an account?{" "}
              <a href="/register" className="satoshi-bold app-text">
                Sign up
              </a>
            </span>
          </div>
        </form>
      </div>

      {/* Right: Image */}
      <div
        className="
          md:static md:flex md:w-1/2
          absolute top-0 left-0 w-full h-full
          items-end justify-end
          z-0
        "
      >
        <div
          className="
            bg-[#dddddd] dark:bg-[#424141]
            rounded-tl-full rounded-tr-full rounded-bl-0 rounded-br-0
            flex items-center justify-center
            mx-auto
            md:h-162.5 md:w-100 h-87.5 w-screen
            mb-0 md:mr-30 rotate-180 md:rotate-0
          "
        >
          <img
            src={loginImg}
            alt="Login"
            className="object-contain h-[80%] w-[80%] md:rotate-0 rotate-180 ml-43 md:ml-0 mb-35 md:mb-0 z-50"
          />
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;