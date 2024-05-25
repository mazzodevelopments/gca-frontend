import Button from './Button';

interface ButtonHeaderProps {
    label: string;
    buttonText: string;
    to: string;
    classNames?: string;
    danger?: boolean;
}

export default function ButtonHeader({
    label,
    buttonText,
    to,
    classNames,
    danger
}: ButtonHeaderProps) {
    return (
        <div
            className={`flex flex-col sm:flex-row justify-between items-center mb-4 ${classNames}`}
        >
            <h1 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-0">
                {label}
            </h1>
            <Button label={buttonText} isAction isDanger={danger} to={to} />
        </div>
    );
}
