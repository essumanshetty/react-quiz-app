// import { Link } from "react-router-dom";

import { Box, Typography, styled } from "@mui/material";

import React from "react";

const boxStyle = {
  // position: "absolute",
  textAlign: "center",
  // bottom: "0px",
  backgroundColor: "#333",
  color: "#fff",
  width: "100%",
  padding: "8px",
  marginTop:'8px'
};

const StyledLink = styled("a")((theme) => ({
  textDecoration: "none",
  color: "#fff",
  marginLeft: "3px",
}));

function Footer() {
  return (
    <Box sx={boxStyle} >
      <Typography align="center">
        Made with 🧡 by
        <StyledLink href="https://www.google.com" target="_blank">
          essumanshetty
        </StyledLink>
      </Typography>
    </Box>
  );
}

export default Footer;
