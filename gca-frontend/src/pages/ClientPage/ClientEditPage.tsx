import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { EditClientLoaderResults } from './loaders/editClientLoader';
import { Client, SubmittableClient } from '../../types/client';
import { updateClient } from '../../services/clientService';
import { countries } from '../../utils/countries';

import useData from '../../hooks/use-data';

import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import Container from '../../components/Container';
import Button from '../../components/Button';
import ButtonHeader from '../../components/ButtonHeader';

export default function ClientEditPage() {
    const { client } = useData<EditClientLoaderResults>();

    const {
        clientId,
        name,
        lastName,
        address,
        birthDay,
        phone,
        country,
        fk_userID
    } = client;

    // INICIAR EL CLIENTE EDITADO CON LOS DATOS DEL CLIENTE
    const [editedClient, setEditedClient] = useState<Client>(() => ({
        clientId,
        name,
        lastName,
        address,
        birthDay: new Date(birthDay), // Convertir a Date al inicializar
        phone,
        country,
        fk_userID
    }));

    const navigate = useNavigate();

    // FORM CHANGES
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;

        // Handle different input types
        if (name === 'birthDay') {
            setEditedClient((editedClient) => ({
                ...editedClient,
                [name]: new Date(value) // Convertir la cadena de fecha a objeto Date
            }));
        } else {
            setEditedClient((editedClient) => ({
                ...editedClient,
                [name]: value
            }));
        }
    };

    // FORM SUBMIT
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // CONVERTIR FECHA A FORMATO ISO PARA MANDAR AL BACKEND
            const clientToSubmit: SubmittableClient = {
                ...editedClient,
                birthDay: editedClient.birthDay.toISOString().slice(0, 10)
            };
            // UPDATE THE CLIENT
            const updated = await updateClient(clientToSubmit);

            if (updated) {
                // NAVIGATE TO EDITED CLIENT
                navigate(`/client/${editedClient.clientId}`);
            }
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

    // FORMAT COUNTRY OPTIONS
    const countryOptions = countries.map((country) => ({
        label: country,
        value: country
    }));

    return (
        <Container isMain>
            <Container>
                <ButtonHeader
                    label="Editar Cliente"
                    buttonText="Eliminar Cliente"
                    to={`/client/${client.clientId}/delete`}
                    danger
                    classNames="mb-4"
                />
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
                            editedClient.birthDay instanceof Date
                                ? editedClient.birthDay
                                      .toISOString()
                                      .slice(0, 10)
                                : ''
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
                        <Button label="Guardar cambios" isAction submit />
                    </div>
                </form>
            </Container>
        </Container>
    );
}
