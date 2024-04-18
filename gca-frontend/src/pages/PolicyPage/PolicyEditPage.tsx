import React, { useState, useEffect } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { Policy } from '../../types/policy';
import { updatePolicy } from '../../services/policyService';
import { PolicyLoaderResults } from './policyLoader';
import {
    actionButton,
    containerDiv,
    input,
    inputDiv,
    listH1,
    mainH1
} from '../../styleClassNames';
import Select from 'react-select';

// Datos de prueba para los dropdowns
const products = ['Producto A', 'Producto B', 'Producto C'].map((product) => ({
    label: product,
    value: product
}));
const branches = ['Ramo X', 'Ramo Y', 'Ramo Z'].map((branch) => ({
    label: branch,
    value: branch
}));
const companies = ['Compañía 1', 'Compañía 2', 'Compañía 3'].map((company) => ({
    label: company,
    value: company
}));

export default function PolicyEditPage() {
    const { policy } = useLoaderData() as PolicyLoaderResults;
    const [editedPolicy, setEditedPolicy] = useState<Policy>(policy);
    const navigate = useNavigate();

    useEffect(() => {
        setEditedPolicy(policy);
    }, [policy]);

    const handleChange = (
        selectedOption: { label: string; value: string } | null,
        name: string
    ) => {
        setEditedPolicy((prevPolicy) => ({
            ...prevPolicy,
            [name]: selectedOption ? selectedOption.value : ''
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
        <div className={containerDiv}>
            <h1 className={`${mainH1} mb-4`}>Editar Póliza</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className={inputDiv}>
                    <label className={listH1}>Fecha de inicio:</label>
                    <input
                        type="date"
                        name="startDate"
                        value={
                            editedPolicy.startDate.toISOString().split('T')[0]
                        }
                        onChange={(e) =>
                            setEditedPolicy((prevPolicy) => ({
                                ...prevPolicy,
                                startDate: new Date(e.target.value)
                            }))
                        }
                        className={input}
                    />
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Fecha de finalización:</label>
                    <input
                        type="date"
                        name="endDate"
                        value={editedPolicy.endDate.toISOString().split('T')[0]}
                        onChange={(e) =>
                            setEditedPolicy((prevPolicy) => ({
                                ...prevPolicy,
                                endDate: new Date(e.target.value)
                            }))
                        }
                        className={input}
                    />
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Nombre del producto:</label>
                    <Select
                        options={products}
                        value={products.find(
                            (option) =>
                                option.value === editedPolicy.productName
                        )}
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'productName')
                        }
                        className={input}
                    />
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Nombre del ramo:</label>
                    <Select
                        options={branches}
                        value={branches.find(
                            (option) => option.value === editedPolicy.branchName
                        )}
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'branchName')
                        }
                        className={input}
                    />
                </div>
                <div className={inputDiv}>
                    <label className={listH1}>Nombre de la compañía:</label>
                    <Select
                        options={companies}
                        value={companies.find(
                            (option) =>
                                option.value === editedPolicy.companyName
                        )}
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'companyName')
                        }
                        className={input}
                    />
                </div>
                <div className="flex justify-center">
                    <button className={actionButton} type="submit">
                        Guardar cambios
                    </button>
                </div>
            </form>
        </div>
    );
}
