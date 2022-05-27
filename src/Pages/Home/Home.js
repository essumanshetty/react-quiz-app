import React from "react";
import { Box, styled, TextField, Button, MenuItem } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",

  // border: "1px solid green",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
  },
}));

const StyledImage = styled("img")(({theme}) => ({
  width: "100%",
  height: "100%",
  [theme.breakpoints.down('xs')] : {
   display: 'none'
  },
}));

const textFieldStyles = {
  width: "100%",
  marginBottom: "30px",
};



const FullWidthBox =styled(Box)(({theme})=>({
  
  display:'flex',
  flexDirection: 'column',
  justifyContent:'center',
  width: '100%',
  margin: '0 50px',
  [theme.breakpoints.up('sm')] : {
    height: '85vh',
    width: '100%'
  },
  [theme.breakpoints.up('md')] : {
    height: '85vh',
    width: '50%'
  }
}));


function Home() {
  return (
    <StyledBox>
      <Box  >
        <StyledImage src="/Images/banner.png" alt="banner" />
      </Box>
      <FullWidthBox>
        <TextField
          sx={textFieldStyles}
          variant="outlined"
          placeholder="Enter your name"
        />
        <TextField
          sx={textFieldStyles}
          variant="outlined"
          placeholder="Select Category"
        ></TextField>

        <TextField
          sx={textFieldStyles}
          variant="outlined"
          placeholder="Choose Difficulty"
        >
          <MenuItem value="easy">Easy</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="difficulty">Difficulty</MenuItem>
          </TextField>

        <Button
          // sx={textFieldStyles}
          fullWidth
          color="primary"
          variant="contained"
          size="large"
        >
          Submit
        </Button>
      </FullWidthBox>
    </StyledBox>
  );
}

export default Home;
