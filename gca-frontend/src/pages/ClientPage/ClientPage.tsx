import useData from '../../hooks/use-data';

import PolicyList from './components/PolicyList';
import Container from '../../components/Container';
import ListDiv from '../../components/ListDiv';
import ButtonHeader from '../../components/ButtonHeader';
import Separator from '../../components/Separator';

import { ClientLoaderResults } from './loaders/clientLoader';

export default function ClientPage() {
    const { client, policies } = useData<ClientLoaderResults>();

    const { id, name, lastName, address, birthDay, phone, country } = client;

    return (
        <Container isMain>
            <Container>
                <div>
                    <ButtonHeader
                        label={name + ' ' + lastName}
                        buttonText="Editar Cliente"
                        to={`/client/${id}/edit`}
                    />
                    <div className="px-1">
                        <ListDiv hasBorderBottom label="Dirección:">
                            {address || 'No disponible'}
                        </ListDiv>
                        <ListDiv hasBorderBottom label="Fecha de nacimiento:">
                            {birthDay.toLocaleDateString() || 'No disponible'}
                        </ListDiv>
                        <ListDiv hasBorderBottom label="Teléfono:">
                            {phone || 'No disponible'}
                        </ListDiv>
                        <ListDiv label="País:">
                            {country || 'No disponible'}
                        </ListDiv>
                    </div>
                </div>
                <Separator marginY="mb-2" />
                <div className="mt-4">
                    <ButtonHeader
                        label="Polizas"
                        buttonText="Agregar Poliza"
                        to={`/client/${id}/policy-add`}
                        classNames="mb-4"
                    />
                    <PolicyList clientId={client.id} policies={policies} />
                </div>
            </Container>
        </Container>
    );
}
