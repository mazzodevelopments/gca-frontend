import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../../services/clientService';
import {
    containerDiv,
    input,
    inputDiv,
    listH1,
    mainDiv,
    mainH1,
    actionButton
} from '../../styleClassNames';
import { AuthContext } from '../../context/AuthContext';
import { AddableClient } from '../../types/client';
import Select from 'react-select';
import { countries } from '../../utils/countries';

export default function ClientAddPage() {
    const { userId } = useContext(AuthContext);

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

    // CONVERT LIST TO REACT SELECT FORMAT
    const countryOptions = countries.map((country) => ({
        label: country,
        value: country
    }));

    return (
        <div className={mainDiv}>
            <div className={containerDiv}>
                <h1 className={mainH1}>Agregar Cliente</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className={inputDiv}>
                        <label className={listH1}>Nombre:</label>
                        <input
                            type="text"
                            name="name"
                            value={newClient.name}
                            onChange={(e) =>
                                setNewClient((prevClient) => ({
                                    ...prevClient,
                                    name: e.target.value
                                }))
                            }
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Apellido:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={newClient.lastName}
                            onChange={(e) =>
                                setNewClient((prevClient) => ({
                                    ...prevClient,
                                    lastName: e.target.value
                                }))
                            }
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Dirección:</label>
                        <input
                            type="text"
                            name="address"
                            value={newClient.address}
                            onChange={(e) =>
                                setNewClient((prevClient) => ({
                                    ...prevClient,
                                    address: e.target.value
                                }))
                            }
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Fecha de nacimiento:</label>
                        <input
                            type="date"
                            name="birthDay"
                            value={
                                newClient.birthDay.toISOString().split('T')[0]
                            }
                            onChange={(e) =>
                                setNewClient((prevClient) => ({
                                    ...prevClient,
                                    birthDay: new Date(e.target.value)
                                }))
                            }
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Teléfono:</label>
                        <input
                            type="text"
                            name="phone"
                            value={newClient.phone}
                            onChange={(e) =>
                                setNewClient((prevClient) => ({
                                    ...prevClient,
                                    phone: e.target.value
                                }))
                            }
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>País:</label>
                        <Select
                            value={countryOptions.find(
                                (option) => option.value === newClient.country
                            )}
                            options={countryOptions}
                            onChange={handleChange}
                            className={input}
                        />
                    </div>
                    <div className="flex justify-center">
                        <button className={actionButton} type="submit">
                            Guardar cliente
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
