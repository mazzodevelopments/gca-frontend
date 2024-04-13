import React, { createContext, useState, PropsWithChildren } from 'react';

interface AuthContextType {
    isLoggedIn: boolean;
    username: string;
    login: (username: string, password: string) => void;
    logout: () => void;
}

const initialAuthContext: AuthContextType = {
    isLoggedIn: false,
    username: '',
    login: () => {},
    logout: () => {}
};

const AuthContext = createContext<AuthContextType>(initialAuthContext);

const AuthProvider: React.FC<PropsWithChildren<object>> = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');

    const login = (username: string, password: string) => {
        if (username === 'toto' && password === 'toto') {
            setIsLoggedIn(true);
            setUsername(username);
        } else {
            throw new Error('No existe ese usuario');
        }
    };

    const logout = () => {
        setIsLoggedIn(false);
        setUsername('');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, username, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
