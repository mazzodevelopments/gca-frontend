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
            <div
                className={`container mx-auto p-4 sm:p-6 lg:p-10 ${classNames}`}
            >
                {children}
            </div>
        );
    } else {
        return (
            <div
                className={`bg-white rounded-xl p-2 sm:p-6 lg:p-8 mx-auto ${classNames}`}
            >
                {children}
            </div>
        );
    }
}
