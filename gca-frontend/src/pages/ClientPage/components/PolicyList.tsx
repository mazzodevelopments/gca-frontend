import { Policy } from '../../../types/policy';
import PolicyListItem from './PolicyListItem';

interface PolicyListProps {
    clientId: number;
    policies: Policy[];
}

export default function PolicyList({ clientId, policies }: PolicyListProps) {
    let renderedItems;
    if (policies) {
        renderedItems = policies.map((item) => {
            return (
                <PolicyListItem
                    key={item.id}
                    clientId={clientId}
                    policy={item}
                />
            );
        });
    }
    return <div>{renderedItems}</div>;
}
