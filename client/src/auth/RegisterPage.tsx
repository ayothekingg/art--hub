import React from "react";
import registerImg from "../assets/auth/register.png";
import type { RegisterPageProps } from "../data/types/auth.model";

const RegisterPage: React.FC<RegisterPageProps> = ({
  form,
  error,
  user,
  handleChange,
  handleSubmit,
}) => (
  <div className="relative h-screen app-bg flex items-start justify-start overflow-x-hidden overflow-y-auto">
    <div className="flex w-full h-full">
      {/* Left: Form with 120px margin-left */}
      <div className="w-full md:w-1/2 p-4 md:mt-20 mt-60 flex flex-col justify-start items-start md:ml-30 relative z-10">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col md:gap-6 gap-5 w-full"
        >
          {/* Add margin-top on mobile so heading is below image */}
          <h2 className="text-[60px] md:text-[40px] clash-extrabold mb-45 md:mb-0 app-text md:mt-0 -mt-37.5 text-start ml-22 md:ml-15">
            <span className="md:hidden">Sign Up</span>
            <span className="hidden md:inline">Create Account</span>
          </h2>
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            type="text"
            className="text-[#999999] dark:text-[#F4F2F2] bg-[#F4F2F2] dark:bg-[#616161] rounded-4xl w-full h-12.5 md:w-115 md:h-19 pl-6 md:text-[26px] text-[18px] focus:outline-none"
          />
          <input
            name="email"
            placeholder="Email@gmail.com"
            value={form.email}
            onChange={handleChange}
            required
            type="email"
            className="text-[#999999] dark:text-[#F4F2F2] bg-[#F4F2F2] dark:bg-[#616161] rounded-4xl w-full h-12.5 md:w-115 md:h-19 pl-6 md:text-[26px] text-[18px] focus:outline-none"
          />
          <input
            name="password"
            placeholder="Create a password"
            value={form.password}
            onChange={handleChange}
            required
            type="password"
            className="text-[#999999] dark:text-[#F4F2F2] bg-[#F4F2F2] dark:bg-[#616161] rounded-4xl w-full h-12.5 md:w-115 md:h-19 pl-6 md:text-[26px] text-[18px] focus:outline-none"
          />
          <input
            name="confirmPassword"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
            type="password"
            className="text-[#999999] dark:text-[#F4F2F2] bg-[#F4F2F2] dark:bg-[#616161] rounded-4xl w-full h-12.5 md:w-115 md:h-19 pl-6 md:text-[26px] text-[18px] focus:outline-none"
          />

          <button
            type="submit"
            className="bg-[#272727] rounded-4xl text-white md:text-[30px] text-[20px] satoshi-bold w-full h-12.5 md:w-115 md:h-19"
          >
            Create Account
          </button>
          {error && <div className="text-red-500">{error}</div>}
          {/* Sign up link under the login button */}
          <div className=" md:-ml-8 w-full flex justify-center">
            <span className="text-[#888] text-[18px] md:text-[22px] satoshi-medium">
              Already have an account?{" "}
              <a href="/login" className="satoshi-bold app-text">
                Sign In
              </a>
            </span>
          </div>
        </form>
        {user && (
          <div className="mt-8">
            <h3 className="text-xl font-semibold">Welcome, {user.name}</h3>
            <p className="text-gray-600">Email: {user.email}</p>
            <p className="text-gray-600">Cart items: {user.cartCount}</p>
          </div>
        )}
      </div>
      {/* Right: Rectangle flush with page bottom */}
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
            src={registerImg}
            alt="Login"
            className="object-contain h-full w-full md:rotate-0 rotate-180 -ml-3 md:ml-0 mb-45 md:mb-0 z-50"
          />
        </div>
      </div>
    </div>
  </div>
);

export default RegisterPage;
