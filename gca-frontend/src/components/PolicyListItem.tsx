import { Link } from 'react-router-dom';
import { Policy } from '../types/policy';
import { listDiv, listButton, listH1 } from '../styleClassNames';

interface PolicyListItemProps {
    clientId: number;
    policy: Policy;
}

export default function PolicyListItem({
    clientId,
    policy
}: PolicyListItemProps) {
    const { branchName, companyName } = policy;

    return (
        <div
            className={`${listDiv} flex justify-between items-center space-x-4 bg-gray-100`}
        >
            <h1 className={listH1}>{`${branchName} | ${companyName}`}</h1>
            <Link
                to={`/client/${clientId}/policy/${policy.id}`}
                className={listButton}
            >
                Detalles
            </Link>
        </div>
    );
}
