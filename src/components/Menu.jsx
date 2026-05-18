import { NavLink } from "react-router";

function Menu() {
    return (
        <nav>
            <ul className='flex flex-col gap-2'>
                <li><NavLink to="/">Dashboard</NavLink></li>
                <li><NavLink to="/boletos">Boletos</NavLink></li>
                <li><NavLink to="/faltas">Faltas</NavLink></li>
                <li><NavLink to="/notas">Notas</NavLink></li>
                <li><NavLink to="/requerimentos">Requerimentos</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;