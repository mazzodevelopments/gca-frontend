import { Link } from 'react-router-dom';
import { listButton } from '../../../styleClassNames';
import type { Client } from '../../../types/client';
import ListDiv from '../../../components/ListDiv';

interface ClientListItemProps {
    client: Client;
}

export default function ClientListItem({ client }: ClientListItemProps) {
    return (
        <ListDiv
            label={client.name + ' ' + client.lastName}
            classNames="bg-gray-100"
        >
            <Link to={`/client/${client.id}`} className={listButton}>
                Detalles
            </Link>
        </ListDiv>
    );
}
