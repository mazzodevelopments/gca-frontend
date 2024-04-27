import React, { createContext, useState, PropsWithChildren } from 'react';
import { useCookies } from 'react-cookie';

interface AuthContextType {
    isLoggedIn: boolean;
    username: string;
    userId: number;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const initialAuthContext: AuthContextType = {
    isLoggedIn: false,
    username: '',
    userId: 0,
    login: () => {},
    logout: () => {}
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

const AuthProvider: React.FC<PropsWithChildren<object>> = ({ children }) => {
    const [cookies, setCookie] = useCookies(['auth']);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
        cookies.auth ? true : false
    );
    const [username, setUsername] = useState<string>(
        cookies.auth ? cookies.auth.username : ''
    );
    const [userId, setUserId] = useState<number>(
        cookies.auth ? cookies.auth.userId : 0
    );

    const login = (username: string, password: string) => {
        if (username === 'toto' && password === 'toto') {
            setIsLoggedIn(true);
            setUsername(username);
            setUserId(1); // ID DEL USUARIO AL INICIAR SESION
            setCookie('auth', { username, userId: 1 }, { path: '/' });
        } else {
            throw new Error('No existe ese usuario');
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
        setUserId(0);
        setCookie('auth', undefined, { path: '/', expires: new Date(0) });
    };

    return (
        <AuthContext.Provider
            value={{ isLoggedIn, username, userId, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
