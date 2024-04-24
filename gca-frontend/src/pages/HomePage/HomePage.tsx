import { Link } from 'react-router-dom';
import FeaturedList from './components/FeaturedList';
import ClientSearch from './components/ClientSearch';
import { actionButton, mainH1 } from '../../styleClassNames';
import useAuth from '../../hooks/use-auth-context';
import Container from '../../components/Container';

export default function HomePage() {
    const { username, logout } = useAuth();

    return (
        <Container isMain>
            <Container>
                <h1 className={mainH1}>Featured</h1>
                <FeaturedList />
            </Container>
            <Container classNames="mt-4">
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
            </Container>
        </Container>
    );
}
