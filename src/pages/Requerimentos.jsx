import { Link, Outlet, useNavigate } from "react-router";
import Main from "../components/Main";
import { useState, useEffect } from "react";
import { listarRequerimentos } from "../services/requerimentoService";
import { criarRequerimento } from "../services/requerimentoService";

function Requerimentos(){
    const [requerimentos, setRequerimentos] = useState([]);

    useEffect(() => {
        async function buscar() {
            const dados = await listarRequerimentos();
            setRequerimentos(dados);
        }
        buscar()
    }, [])

    return (
        <>
            <Main
                titulo="Requerimentos"
                subtitulo="Gerencie seus requerimentos acadêmicos"
            >
                <Link to="novo"> Novo Requerimento </Link>

                <h1>Lista de requerimentos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Descrição</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {requerimentos.map((req) => (
                            <tr key={req.id}>
                                <td>{req.tipo}</td>
                                <td>{req.descricao}</td>
                                <td>{req.data}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Outlet />
            </Main>
        </>
    );
};

export default Requerimentos;