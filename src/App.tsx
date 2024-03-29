import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, styled } from "@mui/material/styles";

import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experiences from "./components/Experiences";
import Projects from "./components/Projects";
import Educations from "./components/Educations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetails from "./components/ProjectDetails";
import { cyberpunk } from "./themes";

const Body = styled("div")(({ theme }) => ({
  background: theme.palette.background.default,
  width: "100%",
  overflowX: "hidden",
}));

function App() {
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    project: null,
  });
  return (
    <ThemeProvider theme={cyberpunk}>
      <Router>
        <Navbar />
        <Body>
          <About />
          <Skills />
          <Experiences />
          <Projects modalState={modalState} setModalState={setModalState} />
          <Educations />
          <Contact />
          <Footer />
          {modalState.isOpen && (
            <ProjectDetails
              modalState={modalState}
              setModalState={setModalState}
            />
          )}
        </Body>
      </Router>
    </ThemeProvider>
  );
}

export default App;
