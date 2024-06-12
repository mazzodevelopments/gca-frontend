import ListItem from '../../../components/ListItem';
import { HomePageClient } from '../../../types/client';

interface ClientListProps {
    clients: HomePageClient[];
}

export default function ClientList({ clients }: ClientListProps) {
    let renderedItems;
    if (clients) {
        renderedItems = clients.map((item) => {
            const { name, lastName, clientId } = item;
            return (
                <ListItem
                    hasBorderBottom={false}
                    key={clientId}
                    label={name + ' ' + lastName}
                    buttonLabel="Detalles"
                    to={`/client/${clientId}`}
                />
            );
        });
    }
    return <div>{renderedItems}</div>;
}
