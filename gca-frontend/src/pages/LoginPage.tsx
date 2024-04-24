import React, { useState } from 'react';
import useAuth from '../hooks/use-auth-context';
import Container from '../components/Container';

export default function LoginPage() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login } = useAuth();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!user || !password) {
            setError(
                'Por favor ingrese un nombre de usuario y una contraseña.'
            );
            return;
        }
        try {
            login(user, password);
        } catch (e) {
            setError('Error');
        }
    };

    return (
        <Container isMain>
            <Container
                isMain
                classNames="flex justify-center items-center h-screen"
            >
                <div className="bg-white rounded-lg p-8 shadow-lg w-96">
                    <h1 className="text-2xl  font-bold mb-4 text-center">
                        Iniciar Sesión
                    </h1>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label
                                htmlFor="user"
                                className="block text-lg font-semibold"
                            >
                                Usuario:
                            </label>
                            <input
                                type="text"
                                id="user"
                                name="user"
                                value={user}
                                onChange={(e) => setUser(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label
                                htmlFor="password"
                                className="block text-lg font-semibold"
                            >
                                Contraseña:
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="contrasena"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                        >
                            Iniciar Sesión
                        </button>
                        {error && <p>{error}</p>}
                    </form>
                </div>
            </Container>
        </Container>
    );
}
