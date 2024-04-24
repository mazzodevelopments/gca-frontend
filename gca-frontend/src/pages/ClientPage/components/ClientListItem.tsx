import type { Client } from '../../../types/client';
import ListDiv from '../../../components/ListDiv';
import Button from '../../../components/Button';

interface ClientListItemProps {
    client: Client;
}

export default function ClientListItem({ client }: ClientListItemProps) {
    return (
        <ListDiv
            label={client.name + ' ' + client.lastName}
            classNames="bg-gray-100"
        >
            <Button label="Detalles" isList to={`/client/${client.id}`} />
        </ListDiv>
    );
}
