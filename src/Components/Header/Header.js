import React from "react";
import { styled, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";

const StyledContainer = styled(Box)({
  //   border: "1px solid green",
  backgroundColor: "#333",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: '8px'
});

function Header() {
  return (
    <StyledContainer>
      <Typography gutterBottom={false} color="#fff" align="center" variant="h4" >
        Quiz App
      </Typography>
      <Divider />
    </StyledContainer>
  );
}

export default Header;
