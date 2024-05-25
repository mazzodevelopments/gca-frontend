import ListItem from '../../../components/ListItem';
import { ClientPagePolicy } from '../../../types/policy';

interface PolicyListProps {
    clientId: number;
    policies: ClientPagePolicy[];
}

export default function PolicyList({ clientId, policies }: PolicyListProps) {
    let renderedItems;
    if (policies) {
        renderedItems = policies.map((item) => {
            const { id, branchName, companyName } = item;
            return (
                <ListItem
                    hasBorderBottom={false}
                    key={id}
                    label={`${branchName} | ${companyName}`}
                    buttonLabel="Detalles"
                    to={`/client/${clientId}/policy/${id}`}
                />
            );
        });
    }
    return <div className="px-1">{renderedItems}</div>;
}
