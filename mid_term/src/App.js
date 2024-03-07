//import "./App.css";

//Importing pages for linking
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Charts from "./Pages/Charts";

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="charts" element={<Charts />} />
      </Routes>
    </Router>
  );
}

export default App;
