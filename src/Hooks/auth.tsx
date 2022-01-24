import { createContext, useContext, useState } from "react";


interface IAuthContext {
    logged: boolean;
    signIn(email: string, password: string): void;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [logged, setLogged] = useState<boolean>(() => {
        const isLogged = localStorage.getItem('@salao:logged');

        return !!isLogged;
    })

    const signIn = (email: string, password: string) => {
        if (email === 'myltiano@email.com' && password === '1234') {
            localStorage.setItem('@salao:logged', 'true');
            setLogged(true);
        } else {
            alert("Senha ou usuário inválidos!");
        }
    }


    const signOut = () => {
        localStorage.removeItem('@salao:logged');
        setLogged(true);;
    }

    return(
        <AuthContext.Provider value={{logged, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };