import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import FeaturedList from '../components/FeaturedList';
import ClientSearch from '../components/ClientSearch';
import { actionButton, mainDiv, mainH1 } from '../styleClassNames';

export default function HomePage() {
    const { username, logout } = useContext(AuthContext);

    return (
        <div className={mainDiv}>
            <div className="bg-white rounded-lg p-4">
                <h1 className={mainH1}>Featured</h1>
                <FeaturedList />
            </div>
            <div className="bg-white rounded-lg p-4 mt-4">
                <div className="flex justify-between items-center">
                    <h1 className={`${mainH1} mb-4`}>Clientes de {username}</h1>
                    <Link to={`/client-add`} className={`${actionButton} mb-4`}>
                        Agregar Cliente
                    </Link>
                </div>
                <ClientSearch />
                <div className="flex justify-center">
                    <button
                        onClick={logout}
                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded-lg"
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
}
