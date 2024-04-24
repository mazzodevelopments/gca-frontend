import { Policy } from '../../../types/policy';
import ListDiv from '../../../components/ListDiv';
import Button from '../../../components/Button';

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
        <div>
            <ListDiv
                label={`${branchName} | ${companyName}`}
                classNames="flex justify-between items-center space-x-4 bg-gray-100"
            >
                <Button
                    label="Detalles"
                    isList
                    to={`/client/${clientId}/policy/${id}`}
                />
            </ListDiv>
        </div>
    );
}
