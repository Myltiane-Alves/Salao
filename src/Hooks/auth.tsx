import { createContext, useCallback, useContext, useState } from "react";

interface IUser {
    id: string;
    name: string;
    email: string;
    
}

interface IAuthState {
    token: string;
    user: IUser;
}
  
interface ISignInCredentials {
    email: string;
    password: string;
}

interface IAuthContext {
    user: IUser,
    signIn(credentials: ISignInCredentials): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
    const [data, setData] = useState<IAuthState>({} as AuthState); 
 
    const signIn = useCallback(async ({email, password}) => {
        const response = await api.post('sessions', {
            email,
            password,
        });

        const {token, user } = response.data;

        await localStorage.multiSet([
            ['@salao:token', token],
            ['@salao:user', JSON.stringify(user)],
        ])
        
         // Inserindo e definindo o token para todas as requisições.
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token, user })
    }, [])


    const signOut = () => {
        await localStorage.removeItem('@salao:logged');
        
        setData({} as IAuthState);
    }, [])

    return(
        <AuthContext.Provider value={{user: data.user, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(): IAuthContext {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };