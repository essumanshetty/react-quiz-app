import { Box, styled } from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";

import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import Result from "./Pages/Result/Result";


const StyledBox = styled(Box)({
  backgroundColor: "#fcfcfc",
  minHeight: "100vh",
  margin: "2px",
  position: "relative",
});

function App() {
  return (
    <BrowserRouter>
      <StyledBox>
        <Header />
        <Box >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Box>

        <Footer />
      </StyledBox>
    </BrowserRouter>
  );
}

export default App;
