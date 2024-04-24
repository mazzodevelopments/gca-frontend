import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AddablePolicy } from '../../types/policy';
import { createPolicy } from '../../services/policyService';
import Input from '../../components/Input';
import SelectInput from '../../components/SelectInput';
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
        <Container isMain>
            <Container>
                <Header label="Agregar Póliza" classNames="mb-4" />
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label="Fecha de inicio:"
                        type="date"
                        name="startDate"
                        value={newPolicy.startDate.toISOString().split('T')[0]}
                        onChange={(e) =>
                            setNewPolicy((prevPolicy) => ({
                                ...prevPolicy,
                                startDate: new Date(e.target.value)
                            }))
                        }
                    />

                    <Input
                        label="Fecha de finalización:"
                        type="date"
                        name="endDate"
                        value={newPolicy.endDate.toISOString().split('T')[0]}
                        onChange={(e) =>
                            setNewPolicy((prevPolicy) => ({
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
                                    option.value === newPolicy.productName
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
                                    option.value === newPolicy.branchName
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
                                    option.value === newPolicy.companyName
                            ) || null
                        }
                        onChange={(selectedOption) =>
                            handleChange(selectedOption, 'companyName')
                        }
                    />
                    <div className="flex justify-center">
                        <Button label="Guardar póliza" isAction submit />
                    </div>
                </form>
            </Container>
        </Container>
    );
}
