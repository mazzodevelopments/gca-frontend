import React, { useState } from 'react';
import useAuth from '../hooks/use-auth-context';
import { useNavigate } from 'react-router-dom';
import logo from '../../public/img/logo.webp';

export default function LoginPage() {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const navigate = useNavigate();

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
            navigate('/');
        } catch (e) {
            setError('Error');
        }
    };

    return (
        <div className="flex flex-col md:flex-row h-screen w-full">
            <div className="w-full md:w-2/6 flex flex-col items-center justify-center bg-gray-300 p-4 space-y-4">
                <img src={logo} alt="Logo" className="max-w-xs" />
                <h1 className="text-3xl font-bold">Gestor de Clientes</h1>
            </div>

            <div className="w-full md:w-4/6 flex flex-col items-center justify-center p-4">
                <form
                    onSubmit={handleSubmit}
                    className="space-y-4 w-full md:w-1/2"
                >
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
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" // Asegura que el input ocupe todo el ancho
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
                            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-500" // Asegura que el input ocupe todo el ancho
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                    >
                        Iniciar Sesión
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </div>
        </div>
    );
}
