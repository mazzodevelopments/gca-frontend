import { AddableClient, Client } from '../types/client';

export const createClient = (client: AddableClient) => {
    console.log(client);
    return 1; // DEBE DEVOLVER EL ID DEL CLIENTE CREADO
};

export const updateClient = (editedClient: Client) => {
    console.log(editedClient);
};

export const deleteClient = (clientId: number) => {
    console.log(clientId + ' eliminado');
};

export async function getAllClientsByUserId(userId: number) {
    try {
        console.log('clientes de ' + userId);
        const response = await fetch(
            'https://6600a57387c91a1164198f19.mockapi.io/gca/clients'
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
        return [];
    }
}

// http://192.168.1.23:5001/clientspreview/12'
