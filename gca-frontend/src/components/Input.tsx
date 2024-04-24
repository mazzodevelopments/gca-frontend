interface InputProps {
    label: string;
    type: string;
    name?: string;
    id?: string;
    value: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    validationError?: string;
}

export default function Input({
    label,
    type,
    name,
    id,
    value,
    onChange,
    validationError
}: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="font-medium text-lg">{label}</label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className="mt-1 p-2 border border-gray-300 rounded-md"
            />
            {validationError && (
                <span style={{ color: 'red' }}>{validationError}</span>
            )}
        </div>
    );
}
