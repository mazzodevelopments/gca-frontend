import FeaturedList from './components/FeaturedList';
import ClientSearch from './components/ClientSearch';
import useAuth from '../../hooks/use-auth-context';
import Container from '../../components/Container';
import ButtonHeader from '../../components/ButtonHeader';

export default function HomePage() {
    const { username, logout } = useAuth();

    return (
        <Container isMain>
            <Container>
                <h1 className="text-2xl font-bold">Featured</h1>
                <FeaturedList />
            </Container>
            <Container classNames="mt-4">
                <ButtonHeader
                    label={`Clientes de ${username}`}
                    buttonText="Agregar Cliente"
                    to={`/client-add`}
                />
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
