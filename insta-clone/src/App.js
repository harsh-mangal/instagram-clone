import "./App.css";
import { HomeDiv } from "./components/HomeDiv";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Signup} from "./components/Signup";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeDiv />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
