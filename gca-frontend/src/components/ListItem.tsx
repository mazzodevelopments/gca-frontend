import Button from './Button';
import ListDiv from './ListDiv';

interface ListItemProps {
    label: string;
    buttonLabel: string;
    hasBorderBottom: boolean;
    to: string;
}

export default function ListItem({
    label,
    buttonLabel,
    hasBorderBottom,
    to
}: ListItemProps) {
    return (
        <ListDiv
            hasBorderBottom={hasBorderBottom}
            label={label}
            classNames="flex justify-between rounded-xl items-center space-x-4 bg-gray-100"
        >
            <Button label={buttonLabel} isList to={to} />
        </ListDiv>
    );
}
