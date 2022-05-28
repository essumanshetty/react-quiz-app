import { Box, CircularProgress, styled } from "@mui/material";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Pages/Home/Home";
import Quiz from "./Pages/Quiz/Quiz";

import { Route, Routes, useNavigate } from "react-router";
import Result from "./Pages/Result/Result";
import { useState } from "react";

import axios from "axios";

const StyledBox = styled(Box)({
  backgroundColor: "#fcfcfc",
  minHeight: "100vh",
  margin: "2px",
  position: "relative",
});

function App() {
  const [settings, setSettings] = useState({
    name: "",
    category: "",
    difficulty: "",
    error: false,
    questions: "",
  });

  const [progress, showProgress] = useState(false);

  const navigate = useNavigate();

  const fetchQuestions = async () => {
    showProgress(true);

    const { category, difficulty } = settings;

    let URL = `https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`;

    try {
      const { data } = await axios.get(URL);
      // console.log(data);
      setSettings({
        ...settings,
        questions: data,
      });
     
    } catch (err) {
      console.log(err);
    } finally {
      showProgress(false);
    }
  };

  const submitHandler = () => {
    const { name, category, difficulty } = settings;

    if (!name || !category || !difficulty) {
      setSettings({
        ...settings,
        error: true,
      });
      setTimeout(() => {
        setSettings({
          ...settings,
          error: false,
        });
      }, 1000);
    } else {
      setSettings({
        ...settings,
        error: false,
      });
      navigate("/quiz");
      fetchQuestions();
    }
    // console.log(settings);
  };

  return (
    <StyledBox>
      <Header />
      {/* Spinner */}

      {progress && <CircularProgress />}

      <Box>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                settings={settings}
                setSettings={setSettings}
                submitHandler={submitHandler}
              />
            }
          />
          <Route path="/quiz" element={<Quiz settings={settings} />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </Box>

      <Footer />
    </StyledBox>
  );
}

export default App;
