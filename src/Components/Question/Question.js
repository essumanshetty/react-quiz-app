import styled from "@emotion/styled";
import { Typography, Grid, Paper, Button, Box } from "@mui/material";
import React from "react";

const CustomPaper = styled(Paper)(({ theme }) => ({
  margin: "10px 0",
  padding: "10px",
  fontWeight: "bold",
}));
const StyledGrid = styled(Paper)(({ theme }) => ({
  margin: "10px 0",
  padding: "8px 0",
  border: "2px solid #ccc",
  width: "100%",
  height: "100%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "15px 15px",
  padding: "12px",
  backgroundColor: "#ccc",
  color: "#333",
}));

const StyledNavButton = styled(Button)((theme) => ({
  width: "47.5%",
  margin: "15px 15px",
  padding: "12px",
  //  color: '#333'
}));

function Question({
  question,
  currentQuestionNo,
  setcurrentQuestionNo,
  options,
  name,
}) {
  // console.log(question, options);

  const handleNext = () => {
    if (currentQuestionNo < 9) {
      setcurrentQuestionNo((prev) => prev + 1);
    } else {
      console.log("Display Result");
    }
  };

  return (
    <Grid container>
      <CustomPaper
        component={Grid}
        container
        justifyContent="center"
        elevation={2}
      >
        <Typography align="center" fontSize={18} fontWeight="bold">
          Welcome , {name}
        </Typography>
      </CustomPaper>

      <Grid container justifyContent="space-between" my={3}>
        <Typography>Category: {question.category}</Typography>
        <Typography>Score : 0</Typography>
      </Grid>
      {/* 
      <Grid container justifyContent="center">
        <Typography align="center">Question {currentQuestionNo + 1}</Typography>
      </Grid> */}

      <StyledGrid>
        <Typography align="center" fontWeight={600} fontSize={18} my={2}>
          {currentQuestionNo + 1}. &nbsp; {question.question}
        </Typography>
        <Box>
          {options.map((option, index) => (
            <StyledButton
              sx={{
                width: { xs: "94%", sm: "94%", md: "46%", lg: "47%" },
              }}
              key={index}
            >
              {option}
            </StyledButton>
          ))}
        </Box>
      </StyledGrid>

      <Grid container>
        <StyledNavButton
          sx={{
            backgroundColor: "#eb6c5e",
            color: "#fff",
            width: { xs: "100%", sm: "94%", md: "46%", lg: "47%" },
          }}
        >
          Exit
        </StyledNavButton>
        <StyledNavButton
          sx={{
            backgroundColor: "#36e03c",
            color: "#fff",
            width: { xs: "100%", sm: "94%", md: "46%", lg: "47%" },
          }}
          onClick={handleNext}
        >
          Next
        </StyledNavButton>
      </Grid>
    </Grid>
  );
}

export default Question;
