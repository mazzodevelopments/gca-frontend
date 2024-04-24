import { Link } from 'react-router-dom';

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
            <Link
                to={to}
                className={`px-4 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mb-4 mt-4`}
            >
                {buttonText}
            </Link>
        </div>
    );
}
