import { CssBaseline } from "@mui/material";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Home from "./pages/Home";
import "./styles/global.scss"

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <Router>
        <Routes>
        <Route path="/" element={<Home/>} />

          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
