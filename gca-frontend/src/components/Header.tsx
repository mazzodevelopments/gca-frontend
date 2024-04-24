interface HeaderProps {
    label: string;
    classNames?: string;
}

export default function Header({ label, classNames }: HeaderProps) {
    return (
        <div className={`flex justify-between items-center ${classNames}`}>
            <h1 className={`text-2xl font-bold`}>{label}</h1>
        </div>
    );
}
