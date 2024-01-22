"use client";
import { Box, Stack, TextField, Typography } from "@mui/material";
import React from "react";

const AddTaskForm = () => {
  return (
    <form action="" className="w-2/3 m-auto my-2 p-2" style={{border:'2px solid black',borderRadius:"10px"}}>
      <Stack direction={"column"} spacing={2}>
        <Stack direction={'column'} spacing={1}>
          <Typography>Title</Typography>
          <TextField id="outlined-basic" label="Title" variant="outlined" />
        </Stack>
        <Stack direction={'column'} spacing={1}>
          <Typography>Content</Typography>
          <TextField
          id="outlined-multiline-flexible"
          label="Content"
          multiline
          minRows={4}
        />
        </Stack>
      </Stack>
    </form>
  );
};

export default AddTaskForm;
