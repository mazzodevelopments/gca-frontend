import { Link } from 'react-router-dom';
import { ClientLoaderResults } from './clientLoader';
import PolicyList from './components/PolicyList';
import { mainH1, actionButton } from '../../styleClassNames';
import useData from '../../hooks/use-data';
import Container from '../../components/Container';
import ListDiv from '../../components/ListDiv';

export default function ClientPage() {
    const { client, policies } = useData<ClientLoaderResults>();

    const { id, name, lastName, address, birthDay, phone, country } = client;

    return (
        <Container>
            <div>
                <div className="flex justify-between items-center mb-4">
                    <h1 className={mainH1}>
                        {name} {lastName}
                    </h1>
                    <Link
                        to={`/client/${id}/edit`}
                        className={`${actionButton}`}
                    >
                        Editar Cliente
                    </Link>
                </div>
                <ListDiv label="Dirección:">
                    {address || 'No disponible'}
                </ListDiv>
                <ListDiv label="Fecha de nacimiento:">
                    {birthDay.toLocaleDateString() || 'No disponible'}
                </ListDiv>
                <ListDiv label="Dirección:">
                    {address || 'No disponible'}
                </ListDiv>
                <ListDiv label="Dirección:">
                    {address || 'No disponible'}
                </ListDiv>
                <ListDiv label="Teléfono:">{phone || 'No disponible'}</ListDiv>
                <ListDiv label="País:">{country || 'No disponible'}</ListDiv>
            </div>
            <div>
                <div className="flex justify-between items-center mb-4 border-t">
                    <h1 className={`${mainH1} mt-4`}>Polizas</h1>
                    <Link
                        to={`/client/${id}/policy-add`}
                        className={`${actionButton} mt-4`}
                    >
                        Agregar Poliza
                    </Link>
                </div>
                <PolicyList clientId={client.id} policies={policies} />
            </div>
        </Container>
    );
}
