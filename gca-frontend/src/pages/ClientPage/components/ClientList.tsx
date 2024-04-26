import ListItem from '../../../components/ListItem';
import { Client } from '../../../types/client';

interface ClientListProps {
    clients: Client[];
}

export default function ClientList({ clients }: ClientListProps) {
    let renderedItems;
    if (clients) {
        renderedItems = clients.map((item) => {
            const { name, lastName, id } = item;
            return (
                <ListItem
                    key={id}
                    label={name + ' ' + lastName}
                    buttonLabel="Detalles"
                    to={`/client/${id}`}
                />
            );
        });
    }
    return <div>{renderedItems}</div>;
}
