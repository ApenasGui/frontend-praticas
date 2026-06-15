import { Link, Outlet } from "react-router";
import Main from "../components/Main";

function Requerimentos(){
    return (
        <>
            <Main
                titulo="Requerimentos"
                subtitulo="Gerencie seus requerimentos acadêmicos"
            >
                <Link to="novo"> Novo Requerimento </Link>
                <section>Documentos Pendentes</section>
                <section>Requerimentos em Andamento</section>
                <section>Requerimentos Finalizados</section>

                <Outlet />
            </Main>
        </>
    );
};

export default Requerimentos;