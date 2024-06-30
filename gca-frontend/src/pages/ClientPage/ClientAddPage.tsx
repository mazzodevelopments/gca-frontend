import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../../services/clientService';
import { AddableClient, SubmittableClient } from '../../types/client';
import { countries } from '../../utils/countries';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import useAuth from '../../hooks/use-auth-context';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Button from '../../components/Button';

export default function ClientAddPage() {
    const { userId } = useAuth();

    const [newClient, setNewClient] = useState<AddableClient>({
        name: '',
        lastName: '',
        address: '',
        birthDay: new Date(),
        phone: '',
        country: '',
        fk_userID: userId || 0
    });

    const navigate = useNavigate();

    const handleChange = (
        selectedOption: { label: string; value: string } | null
    ) => {
        setNewClient((prevClient) => ({
            ...prevClient,
            country: selectedOption ? selectedOption.value : ''
        }));
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        if (name === 'birthDay') {
            setNewClient((prevClient) => ({
                ...prevClient,
                birthDay: new Date(value)
            }));
        } else {
            setNewClient((prevClient) => ({
                ...prevClient,
                [name]: value
            }));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // CONVERTIR FECHA A FORMATO ISO PARA MANDAR AL BACKEND
            const clientToSubmit: SubmittableClient = {
                ...newClient,
                birthDay: newClient.birthDay.toISOString().slice(0, 10)
            };
            const newClientId = await createClient(clientToSubmit);
            if (newClientId) {
                navigate(`/client/${newClientId}`);
            }
        } catch (error) {
            console.error('Error creating client:', error);
        }
    };

    // Convertir lista de países a formato React Select
    const countryOptions = countries.map((country) => ({
        label: country,
        value: country
    }));

    return (
        <Container isMain>
            <Container>
                <Header label="Agregar Cliente" classNames="mb-4" />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Nombre:"
                        type="text"
                        name="name"
                        value={newClient.name}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Apellido:"
                        type="text"
                        name="lastName"
                        value={newClient.lastName}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Dirección:"
                        type="text"
                        name="address"
                        value={newClient.address}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Fecha de nacimiento:"
                        type="date"
                        name="birthDay"
                        value={newClient.birthDay.toISOString().split('T')[0]}
                        onChange={handleInputChange}
                    />
                    <Input
                        label="Teléfono:"
                        type="text"
                        name="phone"
                        value={newClient.phone}
                        onChange={handleInputChange}
                    />
                    <SelectInput
                        label="País:"
                        value={
                            countryOptions.find(
                                (option) => option.value === newClient.country
                            ) || null
                        }
                        name="country"
                        options={countryOptions}
                        onChange={handleChange}
                    />
                    <div className="flex justify-center">
                        <Button label="Guardar cliente" isAction submit />
                    </div>
                </form>
            </Container>
        </Container>
    );
}
