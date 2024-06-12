import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { EditClientLoaderResults } from './loaders/editClientLoader';
import { Client } from '../../types/client';
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

    // Inicializa el estado con todos los campos definidos
    const [editedClient, setEditedClient] = useState<Client>({
        clientId,
        name,
        lastName,
        address,
        birthDay,
        phone,
        country,
        fk_userID
    });

    console.log(editedClient);

    const navigate = useNavigate();

    useEffect(() => {
        if (client) {
            // Actualiza el estado con los datos del cliente
            setEditedClient(client);
        }
    }, [client]);

    // Maneja el cambio en los campos del formulario
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setEditedClient((editedClient) => ({
            ...editedClient,
            [name]: value
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            // Actualiza el cliente
            const updated = await updateClient(editedClient);

            if (updated) {
                // Navega a la página del cliente actualizado
                navigate(`/client/${editedClient.clientId}`);
            }
        } catch (error) {
            console.error('Error updating client:', error);
        }
    };

    // Convierte la lista de países a formato de SelectInput de React
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
                        value={editedClient.birthDay}
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
