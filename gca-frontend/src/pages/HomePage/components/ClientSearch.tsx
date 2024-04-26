import { useState } from 'react';
import ClientList from '../../ClientPage/components/ClientList';
import { Client } from '../../../types/client';
import { clients } from '../../../testData';
import { GoSearch } from 'react-icons/go';

export default function ClientSearch() {
    const [term, setTerm] = useState('');
    const [results, setResults] = useState<Client[]>(clients);

    const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = event.target.value.toLowerCase();
        setTerm(searchTerm);
        const filteredClients = clients.filter((client) => {
            const fullName = `${client.name} ${client.lastName}`.toLowerCase();
            return fullName.includes(searchTerm);
        });
        setResults(filteredClients);
    };

    return (
        <div className="mx-auto flex flex-col">
            <div>
                <form className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                    <input
                        className="px-4 w-full outline-none"
                        id="term"
                        type="text"
                        placeholder="Buscar clientes"
                        value={term}
                        onChange={handleSearch} // Update search results on input change
                    />
                    <button className=" text-black px-4 py-2 hover:text-gray-500 focus:outline-none">
                        <GoSearch />
                    </button>
                </form>
            </div>
            <div className="mt-4">
                <h2 className="text-xl font-bold">Resultados:</h2>
                {results.length > 0 ? (
                    <ClientList clients={results} />
                ) : (
                    <div className="flex justify-center p-4">
                        <p className="text-l font-semibold">
                            No se encontraron resultados.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
