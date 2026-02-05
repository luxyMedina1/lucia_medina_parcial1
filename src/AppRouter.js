import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/lucia_medina_parcial1" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
