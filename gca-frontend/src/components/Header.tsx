interface HeaderProps {
    label: string;
    classNames?: string;
}

export default function Header({ label, classNames }: HeaderProps) {
    return (
        <div
            className={`flex justify-center sm:justify-between items-center ${classNames}`}
        >
            <h1 className={`text-xl sm:text-2xl font-bold`}>{label}</h1>
        </div>
    );
}
