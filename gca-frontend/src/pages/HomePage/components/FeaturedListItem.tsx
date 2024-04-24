import ListDiv from '../../../components/ListDiv';
import type { Client } from '../../../types/client';

interface FeaturedListItemProps {
    text: string;
    client: Client;
}

export default function FeaturedListItem({
    text,
    client
}: FeaturedListItemProps) {
    const handleClick = () => {};

    return (
        <ListDiv label={client.name} onClick={handleClick}>
            {text}
        </ListDiv>
    );
}
