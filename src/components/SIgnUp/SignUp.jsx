"use client";
import {
  FormControl,
  FormHelperText,
  TextField,
  Button,
  Stack,
} from "@mui/material";
import SignUpImg from "@/app/assests/SignUp.webp";
import { SignUpValidation } from "@/schema/ValidationSchema";
import { useFormik } from "formik";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {  signUpUser } from "@/app/Services/SignUp";
import Link from "next/link";
const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      about:""
    },
    validationSchema: SignUpValidation,
    onSubmit: async(values) => {
      try {  
        await signUpUser(values)
        toast.success('You are Registered Successfully')
        formik.resetForm()      
      } catch (error) {
        console.log(error);
      }

    },
  });

  return (
    <Stack sx={{width:'80%',m:'3% auto'}}>
      <h1 className="mb-8 font-extrabold text-4xl">Register</h1>
      <Stack direction={{lg:'row',xs:'column'}} spacing={2}>
        <Stack sx={{ width:{lg:'50%',xs:'100%',alignItems:'center',justifyContent:'center'} }}>
          <Image src={SignUpImg} alt="SignUp Image"/>
        </Stack>
        <Stack sx={{ width:{lg:'50%',xs:'100%'} }}>
        <form style={{display:'flex',flexDirection:'column',justifyContent:"space-between",height:'100%',gap:'3%'}} onSubmit={formik.handleSubmit} spacing={2}>
            <FormControl
              fullWidth
              variant="outlined"
              error={formik.touched.username && Boolean(formik.errors.username)}
            >
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                fullWidth
                name="username"
                id="outlined-basic"
                label="Username"
                variant="outlined"
              />
              <FormHelperText>
                {formik.touched.username && formik.errors.username}
              </FormHelperText>
            </FormControl>

            <FormControl
              fullWidth
              variant="outlined"
              error={formik.touched.email && Boolean(formik.errors.email)}
            >
              <TextField
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                error={formik.touched.email && Boolean(formik.errors.email)}
                fullWidth
                name="email"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                // type="email"
              />
              <FormHelperText>
                {formik.touched.email && formik.errors.email}
              </FormHelperText>
            </FormControl>

            <FormControl
              fullWidth
              variant="outlined"
              error={formik.touched.password && Boolean(formik.errors.password)}
            >
              <TextField
                onChange={formik.handleChange}
                type={"password"}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                fullWidth
                name="password"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
              />
              <FormHelperText>
                {formik.touched.password && formik.errors.password}
              </FormHelperText>
            </FormControl>

            <TextField
              id="outlined-textarea"
              label="About"
              // placeholder="Placeholder"
              fullWidth
              multiline
              name="about"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />

            <div className="flex items-center justify-between mt-6">
              <Button
                type="submit"
                variant="contained"
                // color="primary"
                className="bg-purple-900 hover:bg-purple-700"
                // disabled={!formik.isValid || !formik.dirty}
              >
                Register
              </Button>
              <Link href={'/login'} className="font-semibold">Already registered?</Link>
            </div>
        </form>
        </Stack>
      </Stack>
      <ToastContainer/>
    </Stack>
  );
};

export default SignUp;
