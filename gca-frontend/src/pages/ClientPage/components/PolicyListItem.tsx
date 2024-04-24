import { Link } from 'react-router-dom';
import { Policy } from '../../../types/policy';
import { listButton } from '../../../styleClassNames';
import ListDiv from '../../../components/ListDiv';

interface PolicyListItemProps {
    clientId: number;
    policy: Policy;
}

export default function PolicyListItem({
    clientId,
    policy
}: PolicyListItemProps) {
    const { id, branchName, companyName } = policy;

    return (
        <ListDiv
            label={`${branchName} | ${companyName}`}
            classNames="flex justify-between items-center space-x-4 bg-gray-100"
        >
            <Link
                to={`/client/${clientId}/policy/${id}`}
                className={listButton}
            >
                Detalles
            </Link>
        </ListDiv>
    );
}
