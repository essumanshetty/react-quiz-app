import React, { useEffect, useState } from "react";
import Question from "../../Components/Question/Question";

import { Box, CircularProgress } from "@mui/material";
import styled from "@emotion/styled";

const FullWidthBox = styled(Box)(({ theme }) => ({
  height: "85vh",
  width: "100%",
  // border: "5px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

function Quiz({ settings }) {
  const { questions, name } = settings;
  const [currentQuestionNo, setcurrentQuestionNo] = useState(0);
  const [options, setOptions] = useState(null);

  function shuffleArray(arr) {
    // console.log(arr);
    return arr.sort(() => Math.random() - 0.5);
  }

  useEffect(() => {
    // console.log(settings);
    console.log(currentQuestionNo);
    if (questions.length) {
      setOptions(
        shuffleArray([
          questions[currentQuestionNo].correct_answer,
          ...questions[currentQuestionNo].incorrect_answers,
        ])
      );
    }
  }, [questions, currentQuestionNo]);

  return (
    <Box sx={{ width: "100%", height: { md: "85vh" } }}>
      {options?.length ? (
        <Box mx={3}>
          <Question
            question={questions[currentQuestionNo]}
            currentQuestionNo={currentQuestionNo}
            setcurrentQuestionNo={setcurrentQuestionNo}
            options={options}
            name={name}
          />
        </Box>
      ) : (
        <FullWidthBox>
          {" "}
          <CircularProgress
            sx={{
              color: "#333",
              fontSize: "30px",
            }}
          />
        </FullWidthBox>
      )}
    </Box>
  );
}

export default Quiz;
