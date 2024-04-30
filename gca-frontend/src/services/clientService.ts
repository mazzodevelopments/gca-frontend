import { AddableClient, Client } from '../types/client';

export const createClient = (client: AddableClient) => {
    console.log(client);
    return 1; // DEBE DEVOLVER EL ID DEL CLIENTE CREADO
};

export const updateClient = (editedClient: Client) => {
    console.log(editedClient);
};

export const deleteClient = (clientId: number) => {
    console.log(clientId);
};

export async function getAllClientsByUserId(userId: number) {
    console.log(userId);
    const data = await fetch(
        'https://6600a57387c91a1164198f19.mockapi.io/gca/clients'
    );
    const clients = data.json();
    return clients;
}
