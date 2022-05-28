import React, { useEffect, useState } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import styled from "@emotion/styled";

const FullWidthBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "84vh",
  border: "2px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

function Result({ score }) {
  const [percentage, setPercentage] = useState(0);
  const [color, setColor] = useState("red");

  useEffect(() => {
    const calculatePercentage = () => {
      if (score > 7) {
        setColor("green");
      } else {
        setColor("red");
      }

      let temp = (score / 10) * 100;
      setPercentage(temp);
    };
    calculatePercentage();
  }, [score]);

  return (
    <FullWidthBox>
      <Typography variant="h1">Your Score is : {score}</Typography>
      <Box my={2} sx={{ position: "relative" }}>
        <CircularProgress
          sx={{ color: color }}
          size={150}
          value={100}
          variant="determinate"
        />

        <Box
          sx={{
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            position: "absolute",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography color="primary" variant="h3">
            {" "}
            {percentage} %
          </Typography>
        </Box>



        
      </Box>
    </FullWidthBox>
  );
}

export default Result;
