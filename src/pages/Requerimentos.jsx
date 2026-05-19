import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

function Requerimentos(){
    return (
        <>
            <Sidebar />
            <Main
                titulo="Requerimentos"
                subtitulo="Gerencie seus requerimentos acadêmicos"
            >
                <section>Documentos Pendentes</section>
                <section>Requerimentos em Andamento</section>
                <section>Requerimentos Finalizados</section>
            </Main>
        </>
    );
};

export default Requerimentos;