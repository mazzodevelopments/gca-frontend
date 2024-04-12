import { Policy } from '../types/policy';
import PolicyListItem from './PolicyListItem';

interface PolicyListProps {
    policies: Policy[];
}

export default function PolicyList({ policies }: PolicyListProps) {
    let renderedItems;
    if (policies) {
        renderedItems = policies.map((item) => {
            return <PolicyListItem key={item.id} policy={item} />;
        });
    }
    return <div>{renderedItems}</div>;
}
