import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClientLoaderResults } from './clientLoader';
import { Client } from '../../types/client';
import { updateClient } from '../../services/clientService';
import { mainH1, actionButton } from '../../styleClassNames';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import { countries } from '../../utils/countries';
import useData from '../../hooks/use-data';
import Container from '../../components/Container';

export default function ClientEditPage() {
    const { client } = useData<ClientLoaderResults>();

    const [editedClient, setEditedClient] = useState<Client>(client);
    const navigate = useNavigate();

    useEffect(() => {
        setEditedClient(client);
    }, [client]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setEditedClient((prevClient) => ({
            ...prevClient,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updateClient(editedClient);
            navigate(`/client/${editedClient.id}`);
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

    // Convert country list to React Select format
    const countryOptions = countries.map((country) => ({
        label: country,
        value: country
    }));

    return (
        <Container isMain>
            <Container>
                <h1 className={`${mainH1} mb-4`}>Editar Cliente</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre:"
                        type="text"
                        name="name"
                        value={editedClient.name}
                        onChange={handleChange}
                    />
                    <Input
                        label="Apellido:"
                        type="text"
                        name="lastName"
                        value={editedClient.lastName}
                        onChange={handleChange}
                    />
                    <Input
                        label="Dirección:"
                        type="text"
                        name="address"
                        value={editedClient.address}
                        onChange={handleChange}
                    />
                    <Input
                        label="Fecha de nacimiento:"
                        type="date"
                        name="birthDay"
                        value={
                            editedClient.birthDay.toISOString().split('T')[0]
                        }
                        onChange={handleChange}
                    />
                    <Input
                        label="Teléfono:"
                        type="text"
                        name="phone"
                        value={editedClient.phone}
                        onChange={handleChange}
                    />
                    <SelectInput
                        label="País:"
                        value={
                            countryOptions.find(
                                (option) =>
                                    option.value === editedClient.country
                            ) || null
                        }
                        name="country"
                        options={countryOptions}
                        onChange={(selectedOption) =>
                            setEditedClient((prevClient) => ({
                                ...prevClient,
                                country: selectedOption
                                    ? selectedOption.value
                                    : ''
                            }))
                        }
                    />
                    <div className="flex justify-center">
                        <button className={actionButton} type="submit">
                            Guardar cambios
                        </button>
                    </div>
                </form>
            </Container>
        </Container>
    );
}
