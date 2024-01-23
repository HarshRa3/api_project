'use client'
import SignUpImg from "@/app/assests/SignUp.webp";
import { useFormik } from "formik";
import Image from "next/image";
import React from "react";

const SignUp = () => {
  const formik=useFormik({
    initialValues: {
      username:"",
      email:"",
      password:""

    },
    onSubmit:(values)=>{
      console.log(values);
    }
  })
  return (
    <div className="w-3/4 m-auto">
      <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <aside className="">
          <Image src={SignUpImg} />
        </aside>
        <form>
          <div>
            <label className="block font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
              id="name"
              type="text"
              name="name"
              required="required"
              autofocus="autofocus"
            />
          </div>
          <div className="mt-4">
            <label className="block font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
              id="email"
              type="email"
              name="email"
              required="required"
            />
          </div>
          <div className="mt-4">
            <label className="block font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="shadow-inner bg-gray-100 rounded-lg placeholder-black text-2xl p-4 border-none block mt-1 w-full"
              id="password"
              type="password"
              name="password"
              required="required"
              autoComplete="new-password"
            />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              className="flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
            >
              Register
            </button>
            <a className="font-semibold">Already registered?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
