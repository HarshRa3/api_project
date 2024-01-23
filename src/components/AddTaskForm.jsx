"use client";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import TaskImg from "@/app/assests/taskimg.jpg";
import Image from "next/image";
import { useFormik } from "formik";
import { addtask } from "@/app/Services/AddTask";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const AddTaskForm = () => {
  const formik = useFormik({
    initialValues: {
      title: "",
      content: "",
      status: "",
      userId:"65a50b5a454cdae44acff042"
    },
    onSubmit: async (values) => {
      try {
        await addtask(values)
        toast.success("Adding Data Successfully",{position:'top-center'})
        formik.resetForm(); 
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      onReset={formik.handleReset}
      className="w-2/3 m-auto my-2 p-2"
      style={{ border: "2px solid #00000029", borderRadius: "10px" }}
    >
      <Typography variant="h4" sx={{ textAlign: "center" }}>
        ADD YOUR TASK HERE....
      </Typography>
      <Stack direction={"column"} spacing={2}>
        <Stack
          direction={"row"}
          sx={{ justifyContent: "center", height: "50%" }}
        >
          <Image src={TaskImg} className="w-3/4" alt="Task Image" />
        </Stack>
        <Stack direction={"column"} spacing={1}>
          <Typography>Title</Typography>
          <TextField
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            name="title"
            id="outlined-basic"
            label="Title"
            variant="outlined"
          />
        </Stack>
        <Stack direction={"column"} spacing={1}>
          <Typography>Content</Typography>
          <TextField
            id="outlined-multiline-flexible"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            name="content"
            label="Content"
            multiline
            minRows={4}
          />
        </Stack>
        <Stack direction={"column"} spacing={1}>
          <Typography>Status</Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.status}
              name="status"
              label="status"
              sx={{ textAlign: "left" }}
            >
              <MenuItem value={"pending"}>Pending</MenuItem>
              <MenuItem value={"completed"}>Completed</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction={"row"} spacing={1} sx={{ justifyContent: "center" }}>
          <button
            type="submit"
            disabled={!formik.dirty}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            ADD
          </button>
          <button
            type="reset"
            className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
          >
            Clear
          </button>
        </Stack>
      </Stack>
      <ToastContainer/>
    </form>
  );
};

export default AddTaskForm;
