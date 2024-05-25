import { ReactNode } from 'react';

interface ListDivProps {
    label: string;
    children: ReactNode;
    classNames?: string;
    onClick?: () => void;
    hasBorderBottom?: boolean;
}

export default function ListDiv({
    label,
    children,
    classNames,
    onClick,
    hasBorderBottom = false
}: ListDivProps) {
    return (
        <div
            className={`flex items-center justify-between ${
                hasBorderBottom ? 'border-b' : ''
            } px-2 py-2 m-2 ${classNames}`}
            onClick={onClick}
        >
            <h1 className="font-medium text-lg">{label}</h1>
            <span className="font-medium"></span>
            {children}
        </div>
    );
}
