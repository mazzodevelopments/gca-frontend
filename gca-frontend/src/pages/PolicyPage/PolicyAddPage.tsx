import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AddablePolicy } from '../../types/policy';
import { createPolicy } from '../../services/policyService';
import {
    actionButton,
    containerDiv,
    input,
    inputDiv,
    listH1,
    mainH1
} from '../../styleClassNames';

// Datos de prueba para los dropdowns
const products = ['Producto A', 'Producto B', 'Producto C'];
const branches = ['Ramo X', 'Ramo Y', 'Ramo Z'];
const companies = ['Compañía 1', 'Compañía 2', 'Compañía 3'];

export default function PolicyAddPage() {
    // OBTENER EL ID DEL CLIENTE DESDE PARAMS
    const { clientId: rawClientId } = useParams<{
        clientId: string | undefined;
    }>();
    const clientId = rawClientId ?? '0';

    const [newPolicy, setNewPolicy] = useState<AddablePolicy>({
        startDate: new Date(),
        endDate: new Date(),
        productName: '',
        branchName: '',
        companyName: '',
        clientId: parseInt(clientId)
    });
    const navigate = useNavigate();

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setNewPolicy((prevPolicy) => ({
            ...prevPolicy,
            [name]:
                name === 'startDate' || name === 'endDate'
                    ? new Date(value)
                    : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const newPolicyId = await createPolicy(newPolicy);
            navigate(`/client/${clientId}/policy/${newPolicyId}`);
        } catch (error) {
            console.error('Error creating policy:', error);
        }
    };

    return (
        <div className={containerDiv}>
            <h1 className={`${mainH1} mb-4`}>Agregar Póliza</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className={inputDiv}>
                    <label className={listH1}>Fecha de inicio:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={
                            newPolicy.startDate
                                ? newPolicy.startDate
                                      .toISOString()
                                      .split('T')[0]
                                : ''
                        }
                        onChange={handleChange}
                        className={input}
                    />
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Fecha de finalización:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={
                            newPolicy.endDate
                                ? newPolicy.endDate.toISOString().split('T')[0]
                                : ''
                        }
                        onChange={handleChange}
                        className={input}
                    />
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Nombre del producto:</label>
                    <select
                        name="productName"
                        value={newPolicy.productName}
                        onChange={handleChange}
                        className={input}
                    >
                        <option value="">Seleccionar producto</option>
                        {products.map((product, index) => (
                            <option key={index} value={product}>
                                {product}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Nombre del ramo:</label>
                    <select
                        name="branchName"
                        value={newPolicy.branchName}
                        onChange={handleChange}
                        className={input}
                    >
                        <option value="">Seleccionar ramo</option>
                        {branches.map((branch, index) => (
                            <option key={index} value={branch}>
                                {branch}
                            </option>
                        ))}
                    </select>
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Nombre de la compañía:</label>
                    <select
                        name="companyName"
                        value={newPolicy.companyName}
                        onChange={handleChange}
                        className={input}
                    >
                        <option value="">Seleccionar compañía</option>
                        {companies.map((company, index) => (
                            <option key={index} value={company}>
                                {company}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex justify-center">
                    <button className={actionButton} type="submit">
                        Guardar póliza
                    </button>
                </div>
            </form>
        </div>
    );
}
