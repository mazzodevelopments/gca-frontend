import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createClient } from '../../services/clientService';
import {
    containerDiv,
    mainDiv,
    mainH1,
    actionButton
} from '../../styleClassNames';
import { AuthContext } from '../../context/AuthContext';
import { AddableClient } from '../../types/client';
import { countries } from '../../utils/countries';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';

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

    const [validationErrors, setValidationErrors] = useState<
        Record<string, string>
    >({});

    const navigate = useNavigate();

    // VALIDACIONES
    const validateName = (name: string) => {
        if (!name.trim()) {
            return 'El nombre es requerido.';
        }
        return '';
    };

    const validateLastName = (lastName: string) => {
        if (!lastName.trim()) {
            return 'El apellido es requerido.';
        }
        return '';
    };

    const validateAddress = (address: string) => {
        if (!address.trim()) {
            return 'La dirección es requerida.';
        }
        return '';
    };

    const validateBirthDay = (birthDay: Date) => {
        if (!birthDay) {
            return 'La fecha de nacimiento es requerida.';
        }
        return '';
    };

    const validatePhone = (phone: string) => {
        if (!phone.trim()) {
            return 'El teléfono es requerido.';
        }
        return '';
    };

    const validateCountry = (country: string) => {
        if (!country) {
            return 'Por favor selecciona un país';
        }
        return '';
    };

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
        // VALIDAR LOS CAMPOS ANTES DE CREAR NUEVO CLIENTE
        const errors: Record<string, string> = {};
        errors.name = validateName(newClient.name);
        errors.lastName = validateLastName(newClient.lastName);
        errors.address = validateAddress(newClient.address);
        errors.birthDay = validateBirthDay(newClient.birthDay);
        errors.phone = validatePhone(newClient.phone);
        errors.country = validateCountry(newClient.country);
        // VERIFICAR SI HAY ERRORES
        const hasErrors = Object.values(errors).some((error) => error !== '');
        if (hasErrors) {
            // SI HAY ERRORES AGREGAR AL STATE
            setValidationErrors(errors);
            return;
        }

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
        <div className={mainDiv}>
            <div className={containerDiv}>
                <h1 className={`${mainH1} mb-4`}>Agregar Cliente</h1>
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
                        validationError={validationErrors.name}
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
                        validationError={validationErrors.lastName}
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
                        validationError={validationErrors.address}
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
                        validationError={validationErrors.birthDay}
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
                        validationError={validationErrors.phone}
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
                        validationError={validationErrors.country}
                    />
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
