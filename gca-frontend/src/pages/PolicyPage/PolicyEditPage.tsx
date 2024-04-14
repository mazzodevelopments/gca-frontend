import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Policy } from '../../types/policy';
import { updatePolicy } from './policyService';
import { PolicyLoaderResults } from './policyLoader';

// Datos de prueba para los dropdowns
const products = ['Producto A', 'Producto B', 'Producto C'];
const branches = ['Ramo X', 'Ramo Y', 'Ramo Z'];
const companies = ['Compañía 1', 'Compañía 2', 'Compañía 3'];

export default function PolicyEditPage() {
    const { policy } = useLoaderData() as PolicyLoaderResults;
    const [editedPolicy, setEditedPolicy] = useState<Policy>(policy);
    const navigate = useNavigate();

    useEffect(() => {
        setEditedPolicy(policy);
    }, [policy]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        const newValue =
            name === 'startDate' || name === 'endDate'
                ? new Date(value)
                : value;
        setEditedPolicy((prevPolicy) => ({
            ...prevPolicy,
            [name]: newValue
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await updatePolicy(editedPolicy);
            navigate(
                `/client/${editedPolicy.clientId}/policy/${editedPolicy.id}`
            );
        } catch (error) {
            console.error('Error updating policy:', error);
        }
    };

    return (
        <div>
            <h1>Editar Póliza</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Fecha de inicio:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={
                            editedPolicy.startDate instanceof Date
                                ? editedPolicy.startDate
                                      .toISOString()
                                      .split('T')[0]
                                : editedPolicy.startDate
                        }
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Fecha de finalización:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={
                            editedPolicy.endDate instanceof Date
                                ? editedPolicy.endDate
                                      .toISOString()
                                      .split('T')[0]
                                : editedPolicy.endDate
                        }
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Nombre del producto:</label>
                    <select
                        name="productName"
                        value={editedPolicy.productName}
                        onChange={handleChange}
                    >
                        {products.map((product, index) => (
                            <option key={index} value={product}>
                                {product}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Nombre del ramo:</label>
                    <select
                        name="branchName"
                        value={editedPolicy.branchName}
                        onChange={handleChange}
                    >
                        {branches.map((branch, index) => (
                            <option key={index} value={branch}>
                                {branch}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label>Nombre de la compañía:</label>
                    <select
                        name="companyName"
                        value={editedPolicy.companyName}
                        onChange={handleChange}
                    >
                        {companies.map((company, index) => (
                            <option key={index} value={company}>
                                {company}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Guardar cambios</button>
            </form>
        </div>
    );
}
