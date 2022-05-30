import React from "react";
import Categories from "../../Data/Categories";

import { Box, styled, TextField, Button, MenuItem, Alert } from "@mui/material";

import banner from "./Images/banner.png";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  // border: "1px solid green",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    padding : '0 8px'
  },
}));

const StyledImage = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  [theme.breakpoints.down("xs")]: {
    display: "none",
  },
}));

const textFieldStyles = {
  width: "100%",
  marginBottom: "30px",
};

const FullWidthBox = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100%",
  margin: "0 50px",
  [theme.breakpoints.up("sm")]: {
    height: "84vh",
    width: "100%",
  },
  [theme.breakpoints.up("md")]: {
    height: "84vh",
    width: "50%",
  },
}));

function Home({ settings, setSettings, submitHandler }) {
  const changeHandler = (e) => {
    setSettings({
      ...settings,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <StyledBox>
      <Box>
        <StyledImage src={banner} alt="banner" />
      </Box>
      <FullWidthBox>
        {settings.error && (
          <Error settings={settings} setSettings={setSettings} />
        )}

        <TextField
          sx={textFieldStyles}
          variant="outlined"
          label="Enter your name"
          name="name"
          value={settings.name}
          onChange={changeHandler}
          autoComplete ={false}
          autoSave={false}
        />
        <TextField
          sx={textFieldStyles}
          variant="outlined"
          label="Select Category"
          select
          name="category"
          value={settings.category}
          onChange={changeHandler}
        >
          {Categories.map(({ category, value }) => (
            <MenuItem key={category} value={value}>
              {category}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          sx={textFieldStyles}
          variant="outlined"
          select
          label="Choose Difficulty"
          name="difficulty"
          value={settings.difficulty}
          onChange={changeHandler}
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="hard">Difficulty</MenuItem>
        </TextField>

        <Button
          // sx={textFieldStyles}
          fullWidth
          color="primary"
          variant="contained"
          size="large"
          onClick={submitHandler}
        >
          Submit
        </Button>
      </FullWidthBox>
    </StyledBox>
  );
}

function Error({ settings, setSettings }) {
  return (
    <Alert
      sx={{ marginBottom: "30px", backgroundColor: "tomato", color: "#fff" }}
      severity="error"
      onClose={() =>
        setSettings({
          ...settings,
          error: false,
        })
      }
    >
      Please Fill out the fields
    </Alert>
  );
}

export default Home;
