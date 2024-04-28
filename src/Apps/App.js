import Navigation from "./Navigation";
import HomePage from "../HomePage/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import SubiecteBacPage from "../BacPage/SubiecteBacPage";

import AtestatPage from "../AtestatPage/AtestatPage";
import "../GlobalStyles/FullModalPopup.css";
import "../GlobalStyles/Common.css";

const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Atestat" element={<AtestatPage />} />
        <Route path="/SubiecteBac" element={<SubiecteBacPage />} />
      </Routes>
    </>
  );
};
export default App;
