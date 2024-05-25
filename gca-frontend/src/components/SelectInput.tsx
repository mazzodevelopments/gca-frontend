import Select, { ActionMeta } from 'react-select';

interface CustomOptionType {
    value: string;
    label: string;
}

interface SelectInputProps {
    label: string;
    name?: string;
    value: CustomOptionType | null;
    options: CustomOptionType[];
    onChange: (
        newValue: CustomOptionType | null,
        actionMeta: ActionMeta<CustomOptionType>
    ) => void;
    validationError?: string;
}

export default function SelectInput({
    label,
    name,
    value,
    options,
    onChange,
    validationError
}: SelectInputProps) {
    return (
        <div className="flex flex-col mb-4">
            <label htmlFor={name} className="font-medium text-lg mb-1">
                {label}
            </label>
            <Select
                value={value}
                name={name}
                options={options}
                onChange={onChange}
                classNamePrefix="react-select"
                className="mt-1"
            />
            {validationError && (
                <span className="text-red-500 text-sm mt-1">
                    {validationError}
                </span>
            )}
        </div>
    );
}
