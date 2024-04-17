import React, { createContext, useState, PropsWithChildren } from 'react';

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
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [userId, setUserId] = useState<number>(0);

    const login = (username: string, password: string) => {
        if (username === 'toto' && password === 'toto') {
            setIsLoggedIn(true);
            setUsername(username);
            setUserId(1); // ID DEL USUARIO AL INICIAR SESION
        } else {
            throw new Error('No existe ese usuario');
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
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
