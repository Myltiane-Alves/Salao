import { createContext, ReactNode } from "react"
import api from "../Services/api";


type User = {
    email:string;
    permissions: string[];
    roles: string[];
}


type SignInCredentials = {
    email: string;
    password: string;
}

type AuthContextData = {
    signIn: (credentials: SignInCredentials) => Promise<void>
    signOut: () => void;
}
type AuthProviderProps = {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function signOut() {
   
}

export function AuthProvider({ children }: AuthProviderProps) {

    async function signIn({email, password }: SignInCredentials) {
        try {
            const response = await api.post('sessions', {
                email,
                password
            });
    
            const { token } = response.data;
        } catch (err) {
            console.log(err)
        }
    }
    
    return(
        <AuthContext.Provider value={{ signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}