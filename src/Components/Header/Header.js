import React from "react";
import { styled, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";

const StyledContainer = styled(Box)({
//   border: "1px solid green",
});




function Header() {
  return <StyledContainer>
      <Typography color="#333" align="center" variant="h4" gutterBottom>Quiz App</Typography>
      <Divider/>
  </StyledContainer>;
}

export default Header;
