import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { ScoreResult } from "./pages/ScoreResult";

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/result" element={<ScoreResult />} />
    </Routes>
  );
}
