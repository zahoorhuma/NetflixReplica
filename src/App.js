import "./App.css";
import MainPage from "./Components/MainPage/MainPage";
import Login from "./Components/Login/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
