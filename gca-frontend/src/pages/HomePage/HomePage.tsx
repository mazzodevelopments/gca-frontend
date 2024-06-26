import useAuth from '../../hooks/use-auth-context';
import useData from '../../hooks/use-data';

import { HomeLoaderResults } from './homeLoader';

import FeaturedList from './components/FeaturedList';
import ClientSearch from './components/ClientSearch';
import Container from '../../components/Container';
import ButtonHeader from '../../components/ButtonHeader';
import Header from '../../components/Header';

export default function HomePage() {
    const { username } = useAuth();
    const { clients } = useData<HomeLoaderResults>();

    return (
        <Container isMain>
            <Container>
                <Header label="Destacados" />
                <FeaturedList />
            </Container>
            <Container classNames="mt-4">
                <ButtonHeader
                    label={`Clientes de ${username}`}
                    buttonText="Agregar Cliente"
                    to={`/client-add`}
                    classNames="mb-4"
                />
                <ClientSearch clients={clients} />
            </Container>
        </Container>
    );
}
