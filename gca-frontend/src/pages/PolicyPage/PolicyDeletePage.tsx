import { useNavigate } from 'react-router-dom';

import { PolicyLoaderResults } from './policyLoader';
import { deletePolicy } from '../../services/policyService';

import useData from '../../hooks/use-data';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';

export default function PolicyDeletePage() {
    const { policy } = useData<PolicyLoaderResults>();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deletePolicy(policy.id);
            navigate(`/client/${policy.clientId}`);
        } catch (e) {
            throw new Error('No se pudo eliminar la poliza.' + e);
        }
    };

    return (
        <Container
            isMain
            classNames="flex justify-center items-center h-screen"
        >
            <Container classNames="p-8 shadow-md">
                <Header
                    label={`¿Está seguro que desea eliminar la poliza con ramo: ${policy.branchName} de ${policy.companyName}?`}
                />
                <div className="mt-4 flex justify-center space-x-4">
                    <Button
                        label="Volver Atrás"
                        isAction
                        to={`/client/${policy.clientId}/policy/${policy.id}/edit`}
                    />
                    <Button
                        label="Confirmar"
                        isAction
                        isDanger
                        onClick={handleDelete}
                    />
                </div>
            </Container>
        </Container>
    );
}
