import { Link } from 'react-router-dom';
import useAuth from '../hooks/use-auth-context';

export default function NavBar() {
    const { logout } = useAuth();
    return (
        <nav className="bg-gray-200 text-black p-4">
            <div className="container mx-auto flex justify-between">
                <Link to="/" className="hover:text-gray-500">
                    <h1 className="text-xl font-semibold">
                        Gestor de Clientes
                    </h1>
                </Link>
                <button
                    onClick={logout}
                    className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg"
                >
                    Logout
                </button>
            </div>
        </nav>
    );
}
