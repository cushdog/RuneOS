import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./views/Layout";
import Home from './views/Home';
import Demo from './views/Demo';
import Contact from './views/Contact';
import About from './views/About';
import NoPage from "./views/NoPage";
import MarkdownLoader from "./components/MarkdownLoader";
import hopeforcpp from "./hopeforcpp.svg";
import './App.css';

// Note: the file location used by the markDownPath is the relative path of the CheckpointHolder element to the md file

const mdFileList = ["checkpoint1", "checkpoint2",  "checkpoint3","checkpoint4","checkpoint5",];

function App() {
  return (
    <>
      <div className="main-body">
        <Demo></Demo>
      </div>
      <footer className="page-foot">For the good of all mankind.</footer>
    </>
  );
}
export default App;


