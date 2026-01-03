import { Route, Routes } from "react-router-dom";
import AppLayout from "./AppLayout";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}></Route>
    </Routes>
  );
}
