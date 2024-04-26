import ListItem from '../../../components/ListItem';
import { client1, client2 } from '../../../testData';
import type { Client } from '../../../types/client';

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
                    key={client.id}
                    label={text}
                    buttonLabel="Ir al cliente"
                    to={`/client/${client.id}`}
                />
            );
        });
    }

    return <div>{renderedItems}</div>;
}
