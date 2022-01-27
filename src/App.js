import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import SkillSet from "./components/SkillSet";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { HashRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <NavBar />
        <FrontPage />
        <SkillSet />
        <Education />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
