import Button from './Button';

interface ButtonHeaderProps {
    label: string;
    buttonText: string;
    to: string;
    classNames?: string;
}

export default function ButtonHeader({
    label,
    buttonText,
    to,
    classNames
}: ButtonHeaderProps) {
    return (
        <div className={`flex justify-between items-center ${classNames}`}>
            <h1 className={`text-2xl font-bold`}>{label}</h1>
            <Button label={buttonText} isAction to={to} />
        </div>
    );
}