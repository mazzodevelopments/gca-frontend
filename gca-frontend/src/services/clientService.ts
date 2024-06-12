import axios from 'axios';
import adaptClientPageData, {
    adaptClientData,
    adaptClientListData
} from '../adapters/clientAdapter';
import { AddableClient, Client } from '../types/client';

const URL = 'http://192.168.1.23:3000';

export async function createClient(
    client: AddableClient
): Promise<number | null> {
    try {
        const response = await axios.post(
            `${URL}/client`,
            JSON.stringify(client),
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        return response.data.clientId;
    } catch (error) {
        console.error('Error creating client:', error);
        return null;
    }
}

export async function updateClient(editedClient: Client): Promise<boolean> {
    try {
        await axios.put(`${URL}/client`, editedClient, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Cliente actualizado:', editedClient);
        return true;
    } catch (error) {
        throw new Error(`Error al actualizar el cliente: ${error}`);
    }
}

export async function deleteClient(clientId: number): Promise<boolean> {
    try {
        await axios.delete(`${URL}/client`, { data: { clientId } });
        console.log(`Cliente con ID ${clientId} eliminado`);
        return true;
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        return false;
    }
}

export async function getClientData(clientId: number) {
    try {
        console.log('Datos ' + clientId);
        const response = await axios.get(`${URL}/clientdata/${clientId}`);
        console.log(response);
        return adaptClientData(response.data);
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getClientPageData(clientId: number) {
    try {
        const response = await axios.get(`${URL}/clientpage/${clientId}`);
        return adaptClientPageData(response.data);
    } catch (e) {
        console.log(e);
        return null;
    }
}

export async function getAllClientsByUserId(userId: number) {
    try {
        console.log('Clientes del user con id: ' + userId);
        const response = await axios.get(`${URL}/userclients/${userId}`);
        return adaptClientListData(response.data);
    } catch (e) {
        console.log(e);
        return [];
    }
}
