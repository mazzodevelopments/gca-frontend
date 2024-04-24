import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Policy } from '../../types/policy';
import { updatePolicy } from '../../services/policyService';
import { PolicyLoaderResults } from './policyLoader';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
import useData from '../../hooks/use-data';
import Container from '../../components/Container';
import Header from '../../components/Header';
import Button from '../../components/Button';

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
    const { policy } = useData<PolicyLoaderResults>();
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
        <Container isMain>
            <Container>
                <Header label="Editar Póliza" classNames="mb-4" />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Fecha de inicio:"
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
                    />
                    <Input
                        label="Fecha de finalización:"
                        type="date"
                        name="endDate"
                        value={editedPolicy.endDate.toISOString().split('T')[0]}
                        onChange={(e) =>
                            setEditedPolicy((prevPolicy) => ({
                                ...prevPolicy,
                                endDate: new Date(e.target.value)
                            }))
                        }
                    />
                    <SelectInput
                        label="Nombre del producto:"
                        options={products}
                        value={
                            products.find(
                                (option) =>
                                    option.value === editedPolicy.productName
                            ) || null
                        }
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'productName')
                        }
                    />
                    <SelectInput
                        label="Nombre del ramo:"
                        options={branches}
                        value={
                            branches.find(
                                (option) =>
                                    option.value === editedPolicy.branchName
                            ) || null
                        }
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'branchName')
                        }
                    />
                    <SelectInput
                        label="Nombre de la compañía:"
                        options={companies}
                        value={
                            companies.find(
                                (option) =>
                                    option.value === editedPolicy.companyName
                            ) || null
                        }
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'companyName')
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
