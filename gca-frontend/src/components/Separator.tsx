interface SeparatorProps {
    marginY?: string;
}

export default function Separator({ marginY = 'my-4' }: SeparatorProps) {
    return <div className={`border-t border-gray-300 ${marginY}`}></div>;
}
