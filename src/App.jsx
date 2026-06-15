import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Layout from "./components/Layout"
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";
import NotFound404 from "./pages/NotFound404"
import Login from "./pages/Login"
import { Route, Routes, Navigate } from "react-router"
import { useAuth } from "./context/AuthContext";
import Home from "./pages/Home";

function App(){
  const { logged } = useAuth();

  return (
  <Routes>
    { logged ? (
    <Route path="/" element={<Layout />} >
      <Route path='home' element={<Home />} />
      <Route path="boletos" element={<Boletos />} />
      <Route path="faltas" element={<Faltas />} />
      <Route path="notas" element={<Notas />} />
      <Route path="requerimentos" element={<Requerimentos />} />
      <Route path="*" element={<NotFound404 />} />
    </Route>
    ) : (
      <>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </>
    )}
  </Routes>
  )
};

export default App;