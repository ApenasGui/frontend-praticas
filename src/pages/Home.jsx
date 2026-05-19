import { useParams } from "react-router"

export default function Home(){
    const { id } = useParams();

    return <>
        <h1>Bem vindo, Aluno {id}</h1>
    </>
    
}