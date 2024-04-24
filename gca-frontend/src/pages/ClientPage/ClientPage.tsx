import { Link } from 'react-router-dom';
import { ClientLoaderResults } from './clientLoader';
import PolicyList from './components/PolicyList';
import { mainH1, listDiv, listH1, actionButton } from '../../styleClassNames';
import useData from '../../hooks/use-data';
import Container from '../../components/Container';

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
                <div className={listDiv}>
                    <h1 className={listH1}>Dirección:</h1>
                    <span className="font-medium">
                        {address || 'No disponible'}
                    </span>
                </div>
                <div className={listDiv}>
                    <h1 className={listH1}>Fecha de nacimiento:</h1>
                    <span className="font-medium">
                        {birthDay.toLocaleDateString() || 'No disponible'}
                    </span>
                </div>
                <div className={listDiv}>
                    <h1 className={listH1}>Teléfono:</h1>
                    <span className="font-medium">
                        {phone || 'No disponible'}
                    </span>
                </div>
                <div className={listDiv}>
                    <h1 className={listH1}>País:</h1>
                    <span className="font-medium">
                        {country || 'No disponible'}
                    </span>
                </div>
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
