import { input, inputDiv, listH1 } from '../styleClassNames';

interface InputProps {
    label: string;
    type: string;
    name?: string;
    value: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
    validationError?: string;
}

export default function Input({
    label,
    type,
    name,
    value,
    onChange,
    validationError
}: InputProps) {
    return (
        <div className={inputDiv}>
            <label className={listH1}>{label}</label>
            <input
                type={type}
                value={value}
                name={name}
                onChange={onChange}
                className={input}
            />
            {validationError && (
                <span style={{ color: 'red' }}>{validationError}</span>
            )}
        </div>
    );
}
