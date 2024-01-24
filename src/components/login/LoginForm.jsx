'use client'
import { Button, TextField, Typography } from "@mui/material";

import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

const LoginForm = () => {
    const formik=useFormik({
        initialValues: { email:"", password:"" },
        onSubmit:(values)=>{
            console.log(values);
            formik.resetForm()    
        }
    })
  return (
    <>
      <section className="h-screen" >
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Welcome to Login Page
        </Typography>
        <div className="container h-full px-6 pb-20">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="w-full"
                alt="Phone image"
              />
            </div>
            {/* Right column container with form */}
            <div className="md:w-8/12 lg:ml-6 lg:w-5/12">
              <form onSubmit={formik.handleSubmit}>
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <TextField
                    fullWidth
                    name="email"
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  
                  />
                </div>
                {/* Password input */}
                <div className="relative mb-6" data-te-input-wrapper-init="">
                  <TextField
                    type={"password"}
                    fullWidth
                    name="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]"></div>
                  {/* Forgot password link */}
                  <Link
                    href="/signUp"
                    className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >
                    Forgot password?
                  </Link>
                </div>
                {/* Submit button */}
                <Button
                  variant="contained"
                  className="bg-green-600 hover:bg-green-500"
                  type="submit"
                  fullWidth
                >
                  Sign in
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginForm;
