import { NavLink } from "react-router";
import { useAuth } from "../context/AuthContext";

function Menu() {
    const {user} = useAuth();
    return (
        <nav>
        <h1>Olá, {user.nome} </h1>
            <ul className='flex flex-col gap-2'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/boletos">Boletos</NavLink></li>
                <li><NavLink to="/faltas">Faltas</NavLink></li>
                <li><NavLink to="/notas">Notas</NavLink></li>
                <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;