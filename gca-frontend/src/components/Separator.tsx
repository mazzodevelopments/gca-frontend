interface SeparatorProps {
    marginY?: string; // Margen vertical opcional, por defecto 'my-4'
}

export default function Separator({ marginY = 'my-4' }: SeparatorProps) {
    return <div className={`border-t border-gray-300 ${marginY}`}></div>;
}
