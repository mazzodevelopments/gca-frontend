import Button from './Button';
import ListDiv from './ListDiv';

interface ListItemProps {
    label: string;
    buttonLabel: string;
    to: string;
}

export default function ListItem({ label, buttonLabel, to }: ListItemProps) {
    return (
        <div>
            <ListDiv
                label={label}
                classNames="flex justify-between items-center space-x-4 bg-gray-100"
            >
                <Button label={buttonLabel} isList to={to} />
            </ListDiv>
        </div>
    );
}
