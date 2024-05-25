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
        <div className="flex flex-col mb-4">
            <label htmlFor={id} className="font-medium text-lg mb-1">
                {label}
            </label>
            <input
                type={type}
                name={name}
                id={id}
                value={value}
                onChange={onChange}
                className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            />
            {validationError && (
                <span className="text-red-500 text-sm mt-1">
                    {validationError}
                </span>
            )}
        </div>
    );
}
