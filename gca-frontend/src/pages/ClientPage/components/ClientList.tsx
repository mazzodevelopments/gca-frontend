import { Client } from '../../../types/client';
import ClientListItem from './ClientListItem';

interface ClientListProps {
    clients: Client[];
}

export default function ClientList({ clients }: ClientListProps) {
    let renderedItems;
    if (clients) {
        renderedItems = clients.map((item) => {
            return <ClientListItem key={item.id} client={item} />;
        });
    }
    return <div>{renderedItems}</div>;
}
