import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import { Route, Routes } from "react-router";

function App(){
  return (
  <Routes>
    <Route index element={<Dashboard />} />
    <Route path="boletos" element={<Boletos />} />
    <Route path="faltas" element={<Faltas />} />
    <Route path="notas" element={<Notas />} />
    <Route path="requerimentos" element={<Requerimentos />} />
  </Routes>
  )
};

export default App;