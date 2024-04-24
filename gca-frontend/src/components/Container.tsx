import { ReactNode } from 'react';

interface ContainerProps {
    children: ReactNode;
    isMain?: boolean;
    classNames?: string;
}

export default function Container({
    children,
    isMain,
    classNames
}: ContainerProps) {
    if (isMain) {
        return (
            <div className={`container mx-auto p-4 ${classNames}`}>
                {children}
            </div>
        );
    } else {
        return (
            <div className={`bg-white rounded-lg p-4 ${classNames}`}>
                {children}
            </div>
        );
    }
}
