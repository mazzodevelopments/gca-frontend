import ListItem from '../../../components/ListItem';
import type { Client } from '../../../types/client';

const client1: Client = {
    clientId: 1,
    name: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    birthDay: '1990-01-01',
    phone: '+1234567890',
    country: 'Estados Unidos',
    fk_userID: 123
};

const client2: Client = {
    clientId: 2,
    name: 'Alice',
    lastName: 'Smith',
    address: '456 Elm St',
    birthDay: '1985-05-15',
    phone: '+1987654321',
    country: 'Canada',
    fk_userID: 456
};

interface FeaturedListProps {
    text: string;
    client: Client;
}

export default function FeaturedList() {
    const features: FeaturedListProps[] = [
        {
            client: client1,
            text: `Cumpleaños de ${client1.name}`
        },
        {
            client: client2,
            text: `En un mes vence la poliza de ${client2.name}`
        }
    ];
    let renderedItems;
    if (features) {
        renderedItems = features.map((item) => {
            const { text, client } = item;

            return (
                <ListItem
                    hasBorderBottom={false}
                    key={client.clientId}
                    label={text}
                    buttonLabel="Ir al cliente"
                    to={`/client/${client.clientId}`}
                />
            );
        });
    }

    return <div className="px-1">{renderedItems}</div>;
}
