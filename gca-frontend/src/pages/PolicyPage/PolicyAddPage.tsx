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
        selectedOption: { label: string; value: string } | null,
        name: string
    ) => {
        setNewPolicy((prevPolicy) => ({
            ...prevPolicy,
            [name]: selectedOption ? selectedOption.value : ''
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
                        value={newPolicy.startDate.toISOString().split('T')[0]}
                        onChange={(e) =>
                            setNewPolicy((prevPolicy) => ({
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
                        value={newPolicy.endDate.toISOString().split('T')[0]}
                        onChange={(e) =>
                            setNewPolicy((prevPolicy) => ({
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
                            (option) => option.value === newPolicy.productName
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
                            (option) => option.value === newPolicy.branchName
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
                            (option) => option.value === newPolicy.companyName
                        )}
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'companyName')
                        }
                        className={input}
                    />
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
