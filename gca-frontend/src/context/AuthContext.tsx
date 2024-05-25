import React, { createContext, useState, PropsWithChildren } from 'react';
import { useCookies } from 'react-cookie';
import axios from 'axios';

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
    login: async () => {},
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

    const login = async (username: string, password: string) => {
        try {
            const response = await axios.post(
                'http://192.168.1.23:5001/login',
                {
                    username,
                    password
                },
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );

            const data = response.data;
            console.log('POST request successful:', data);

            setIsLoggedIn(true);
            setUsername(username);
            setUserId(data.userId);
            setCookie('auth', { username, userId: data.userId }, { path: '/' });
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } catch (error: any) {
            console.error('POST request failed:', error.message);
            throw error;
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
