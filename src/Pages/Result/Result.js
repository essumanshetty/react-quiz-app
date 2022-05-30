import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

import CanvasJSReact from "../../Charts/canvasJs/canvasjs.react";
import { useNavigate } from "react-router";

var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const FullWidthBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "84vh",
  // border: "2px solid red",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

function Result({ score, name }) {
  const [percentage, setPercentage] = useState(0);
  // const [color, setColor] = useState("red");
  const navigate = useNavigate();

  const takeAnother = () => {
    window.location.href = window.location.pathname;
    // navigate("/");
  };

  useEffect(() => {
    const calculatePercentage = () => {
      // if (score > 7) {
      //   setColor("green");
      // } else {
      //   setColor("red");
      // }

      let temp = (score / 10) * 100;
      setPercentage(temp);
    };
    calculatePercentage();
  }, [score, name, navigate]);

  let incorrect = 100 - percentage;

  CanvasJS.addColorSet("customColorSet1", [
    //colorSet Array
    "#0abf10",
    "#e0311d",
  ]);

  const options = {
    animationEnabled: true,
    colorSet: "customColorSet1",
    data: [
      {
        type: "pie",
        // startAngle: 240,
        yValueFormatString: '##0.00"%"',
        indexLabel: "{label} {y}",
        dataPoints: [
          { y: percentage, label: "Correct answers" },
          { y: incorrect, label: "Incorrect answers" },
        ],
      },
    ],
  };

  return (
    <FullWidthBox>
      <Typography
        sx={{ fontSize: { xs: "30px", sm: "50px" }, marginTop: "30px" }}
      >
        Your Score is : {score}
      </Typography>
      <Box>
        <Typography variant="p">
          {score > 7 ? (
            <> Congratulations!!!! You cleared the assessment</>
          ) : (
            <>Sorry., You didn't clear the assessment</>
          )}
        </Typography>
      </Box>
      <Box my={1} sx={{ width: "100%" }}>
        {/* <CircularProgress
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
        </Box> */}
        <CanvasJSChart options={options} />
      </Box>

      <Box>
        <Button
          variant="contained"
          size="large"
          onClick={takeAnother}
          sx={{ marginBottom: "30px" }}
        >
          Take another Quiz
        </Button>
      </Box>
    </FullWidthBox>
  );
}

export default Result;
