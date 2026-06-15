import { useState, createContext } from "react";
import { useContext } from "react";

const AuthContext = createContext();

function AuthProvider({children}){
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);

    const login = (dados) => {
        setUser({nome: dados.nome, email: dados.email, matricula: dados.matricula})
        setLogged(true)
    }

    const logout = () => {
        setUser({});
        setLogged(false)
    }

    return <AuthContext.Provider value={{logged, user, login, logout}}>
        {children}
    </AuthContext.Provider>
}

function useAuth(){
    const context = useContext(AuthContext);
    if(!context){
        throw new Error('Usuário inválido');
    }
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export {useAuth, AuthProvider};