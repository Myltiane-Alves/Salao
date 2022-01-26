import { createContext, ReactNode, useCallback, useState } from "react"
import api from "../Services/api";
import { v4 as uuid } from 'uuid';

type User = {
    id: string;
    name: string;
    cpf: number;
    birthdate: number;
    cep: string;
    state: string;
    city: string;
    neighborhood: string;
    street: string;
    number?: number;
    email: string;
    password: string;
}


type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    token: { token: string };
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>
    signOut: () => void;
    createUser(user: User): void;
}
type AuthState = {
    user: User;
}

interface AuthStateToken {
    token: string;
}
  

export const AuthContext = createContext<AuthContextData>(
    {} as AuthContextData,
);

export function signOut() {
   
}

export const AuthProvider: React.FC = ({ children }) => {
    const [token, setToken] = useState<AuthStateToken>(() => {
        const tokenData = localStorage.getItem("@salao:token");

        if (tokenData) {
            return {token: tokenData};
        }

        return {} as AuthStateToken;
    });

    const [data, setData] = useState<AuthState>(() => {
        const user = localStorage.getItem('@salao:user');
    
        if (user) {
          return { user: JSON.parse(user) };
        }
    
        return {} as AuthState;
    });

    const signIn = useCallback(async ({email, password }) => {
        const dataLogin = localStorage.getItem('@salao:user');
        const tokenUuid = uuid();

        if(dataLogin) {
            const user: User = JSON.parse(dataLogin);
            if (user.email === email && user.password === password) {
                localStorage.setItem('@salao:token', tokenUuid);
                setToken({ token: tokenUuid });
            }
        }
    }, []);
    
    const signOut = useCallback(() => {
        localStorage.removeItem('@salao:token');
    
        setToken({ token: '' });
    }, []);

    const createUser = useCallback(
        (user: User) => {
            setData({
                user,
            });
            localStorage.setItem('@salao:user', JSON.stringify(user));
        },
        [setData],
    );

    return(
        <AuthContext.Provider 
            value={{
                token,
                user: data.user,
                signIn,
                signOut,
                createUser
            }}
                
        >
            {children}
        </AuthContext.Provider>
    )
}