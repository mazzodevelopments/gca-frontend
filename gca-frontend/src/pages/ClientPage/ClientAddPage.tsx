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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setNewClient((prevClient) => ({
            ...prevClient,
            [name]: name === 'birthDay' ? new Date(value) : value
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
                            onChange={handleChange}
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Apellido:</label>
                        <input
                            type="text"
                            name="lastName"
                            value={newClient.lastName}
                            onChange={handleChange}
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Dirección:</label>
                        <input
                            type="text"
                            name="address"
                            value={newClient.address}
                            onChange={handleChange}
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Fecha de nacimiento:</label>
                        <input
                            type="date"
                            name="birthDay"
                            value={
                                newClient.birthDay
                                    ? newClient.birthDay
                                          .toISOString()
                                          .split('T')[0]
                                    : ''
                            }
                            onChange={handleChange}
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>Teléfono:</label>
                        <input
                            type="text"
                            name="phone"
                            value={newClient.phone}
                            onChange={handleChange}
                            className={input}
                        />
                    </div>
                    <div className={inputDiv}>
                        <label className={listH1}>País:</label>
                        <input
                            type="text"
                            name="country"
                            value={newClient.country}
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
