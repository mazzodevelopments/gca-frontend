import { useNavigate } from 'react-router-dom';

import { deleteClient } from '../../services/clientService';
import { ClientLoaderResults } from './clientLoader';

import useData from '../../hooks/use-data';

import Button from '../../components/Button';
import Container from '../../components/Container';
import Header from '../../components/Header';

export default function ClientDeletePage() {
    const { client } = useData<ClientLoaderResults>();
    const navigate = useNavigate();

    const handleDelete = async () => {
        try {
            await deleteClient(client.id);
            navigate('/');
        } catch (e) {
            throw new Error('No se pudo eliminar el cliente.' + e);
        }
    };

    return (
        <Container
            isMain
            classNames="flex justify-center items-center h-screen"
        >
            <Container classNames="p-8 shadow-md">
                <Header
                    label={`¿Está seguro que desea eliminar a ${client.name}?`}
                />
                <div className="mt-4 flex justify-center space-x-4">
                    <Button
                        label="Volver Atrás"
                        isAction
                        to={`/client/${client.id}/edit`}
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
