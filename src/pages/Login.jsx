import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

function Login(){
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        login({
            nome: "Usuário teste",
            email: "usuario@email.teste"
        })
        navigate("/");
    }

    return <>
        <h1>Login</h1>
        <button onClick={handleLogin}>Entrar</button>
    </>
}

export default Login;