/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client, HomePageClient } from '../types/client';
import { ClientPagePolicy } from '../types/policy';

export function adaptClientData(data: any): Client {
    const client: Client = {
        clientId: data.clientId,
        name: data.name,
        lastName: data.lastName,
        address: data.address,
        birthDay: data.birthDay,
        phone: data.phone,
        country: data.country,
        fk_userID: data.fk_userID
    };
    return client;
}

export default function adaptClientPageData(data: any): {
    client: Client;
    policies: ClientPagePolicy[];
} {
    const { client, policies } = data;
    const {
        clientId,
        name,
        lastName,
        address,
        birthDay,
        phone,
        country,
        fk_userID
    } = client;

    const adaptedClient: Client = {
        clientId: clientId,
        name: name,
        lastName: lastName,
        address: address,
        birthDay: birthDay,
        phone: phone,
        country: country,
        fk_userID: fk_userID
    };

    return { client: adaptedClient, policies };
}

export function adaptClientListData(data: any[]): HomePageClient[] {
    const clients: HomePageClient[] = data.map((client) => ({
        clientId: client.clientID,
        name: client.name,
        lastName: client.lastName
    }));
    return clients;
}
