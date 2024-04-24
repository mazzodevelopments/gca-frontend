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
        <div className="flex flex-col">
            <label className="font-medium text-lg">{label}</label>
            <Select
                value={value}
                name={name}
                options={options}
                onChange={onChange}
                className="mt-1 p-2 border border-gray-300 rounded-md"
            />
            {validationError && (
                <span style={{ color: 'red' }}>{validationError}</span>
            )}
        </div>
    );
}
