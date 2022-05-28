import styled from "@emotion/styled";
import { Typography, Grid, Paper, Button, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const CustomPaper = styled(Paper)(({ theme }) => ({
  margin: "10px 0",
  padding: "10px",
  fontWeight: "bold",
}));
const StyledGrid = styled(Paper)(({ theme }) => ({
  margin: "10px 0",
  padding: "18px 0",
  border: "2px solid #ccc",
  width: "100%",
  height: "100%",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  margin: "15px 15px",
  padding: "16px",
  backgroundColor: "#ccc",
  color: "#333",
  "&:hover": {
    backgroundColor: "#e2e620",
  },
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
  correctAnswer,
  score,
  setScore,
}) {
  // console.log(question, options);
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // console.log("calling");
    setDisabled(false);
  }, [currentQuestionNo]);

  const handleNext = () => {
    if (currentQuestionNo < 9) {
      setcurrentQuestionNo((prev) => prev + 1);
    } else {
      navigate("/result");
      // console.log("Display Result");
    }
  };

  const exithandler = () => {
    navigate("/");
  };

  const addScore = (option, index) => {
    setDisabled(true);
    if (option === correctAnswer) {
      setScore((prev) => prev + 1);
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
        <Typography>Score : {score}</Typography>
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
              onClick={() => addScore(option, index)}
              disabled={disabled}
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
            "&:hover": {
              backgroundColor: "#e0311d",
            },
            color: "#fff",
            width: { xs: "100%", sm: "94%", md: "46%", lg: "47%" },
          }}
          onClick={exithandler}
        >
          Exit
        </StyledNavButton>
        <StyledNavButton
          sx={{
            backgroundColor: "#36e03c",
            "&:hover": {
              backgroundColor: "#0abf10",
            },
            color: "#fff",
            width: { xs: "100%", sm: "94%", md: "46%", lg: "47%" },
          }}
          onClick={handleNext}
        >
          {currentQuestionNo < 9 ? "Next" : "Submit"}
        </StyledNavButton>
      </Grid>
    </Grid>
  );
}

export default Question;
