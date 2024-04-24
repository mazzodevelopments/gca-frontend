import { Link } from 'react-router-dom';

interface ButtonProps {
    label: string;
    submit?: boolean;
    isAction?: boolean;
    isList?: boolean;
    to?: string;
}

export default function Button({
    label,
    submit,
    isAction,
    isList,
    to
}: ButtonProps) {
    const actionButtonStyle = `px-4 py-1 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 mb-4 mt-4`;
    const listButtonStyle =
        'px-4 py-0.5 bg-blue-500 text-white rounded-xl hover:bg-blue-600 focus:outline-none focus:bg-blue-600';
    if (isAction && to) {
        return (
            <Link to={to} className={actionButtonStyle}>
                {label}
            </Link>
        );
    } else if (isList && to) {
        return (
            <Link to={to} className={listButtonStyle}>
                {label}
            </Link>
        );
    } else if (isAction && submit) {
        return (
            <button className={actionButtonStyle} type="submit">
                Guardar cliente
            </button>
        );
    } else
        throw new Error(
            'Invalid button configuration, check components/Button.tsx!'
        );
}
