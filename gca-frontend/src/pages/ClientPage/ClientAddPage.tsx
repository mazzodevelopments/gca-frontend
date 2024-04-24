import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../../services/clientService';
import { AddableClient } from '../../types/client';
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
        userId
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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newClientId = await createClient(newClient);
            navigate(`/client/${newClientId}`);
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
                        onChange={(e) =>
                            setNewClient((prevClient) => ({
                                ...prevClient,
                                name: e.target.value
                            }))
                        }
                    />
                    <Input
                        label="Apellido:"
                        type="text"
                        name="lastName"
                        value={newClient.lastName}
                        onChange={(e) =>
                            setNewClient((prevClient) => ({
                                ...prevClient,
                                lastName: e.target.value
                            }))
                        }
                    />
                    <Input
                        label="Dirección:"
                        type="text"
                        name="address"
                        value={newClient.address}
                        onChange={(e) =>
                            setNewClient((prevClient) => ({
                                ...prevClient,
                                address: e.target.value
                            }))
                        }
                    />
                    <Input
                        label="Fecha de nacimiento:"
                        type="date"
                        name="birthDay"
                        value={newClient.birthDay.toISOString().split('T')[0]}
                        onChange={(e) =>
                            setNewClient((prevClient) => ({
                                ...prevClient,
                                birthDay: new Date(e.target.value)
                            }))
                        }
                    />
                    <Input
                        label="Teléfono:"
                        type="text"
                        name="phone"
                        value={newClient.phone}
                        onChange={(e) =>
                            setNewClient((prevClient) => ({
                                ...prevClient,
                                phone: e.target.value
                            }))
                        }
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
