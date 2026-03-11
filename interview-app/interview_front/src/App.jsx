import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import "./styles/body.scss";
import { QuizPage } from "./pages/QuizPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/category/:category" element={<QuizPage />} />
    </Routes>
  );
}

export default App;
