import { Link } from 'react-router-dom';

interface ButtonProps {
    label: string;
    submit?: boolean;
    isAction?: boolean;
    isList?: boolean;
    isDanger?: boolean;
    to?: string;
    onClick?: () => void;
}

export default function Button({
    label,
    submit,
    isAction,
    isList,
    isDanger,
    to,
    onClick
}: ButtonProps) {
    const baseButtonStyle =
        'px-4 py-2 text-white rounded-xl focus:outline-none mb-4 mt-4';
    const dangerColor = 'bg-red-500 hover:bg-red-600 focus:bg-red-600';
    const actionColor = 'bg-gray-500 hover:bg-gray-600 focus:bg-gray-600';
    const listColor = 'bg-blue-500 hover:bg-blue-600 focus:bg-blue-600';

    const actionButtonStyle = `${baseButtonStyle} ${
        isDanger ? dangerColor : actionColor
    }`;
    const listButtonStyle = `px-4 py-1 ${listColor} text-white rounded-full focus:outline-none`;

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
                {label}
            </button>
        );
    } else if (isAction && onClick) {
        return (
            <button className={actionButtonStyle} onClick={onClick}>
                {label}
            </button>
        );
    } else {
        throw new Error(
            'Invalid button configuration, check components/Button.tsx!'
        );
    }
}
