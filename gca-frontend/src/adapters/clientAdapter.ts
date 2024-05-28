/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client, HomePageClient } from '../types/client';
import { ClientPagePolicy } from '../types/policy';

export function adaptClientData(data: any): Client {
    const client: Client = {
        id: data.id,
        name: data.name,
        lastName: data.lastName,
        address: data.address,
        birthDay: new Date(data.birthDay),
        phone: data.phone,
        country: data.country,
        userId: data.userId
    };
    return client;
}

export default function adaptClientPageData(data: any): {
    client: Client;
    policies: ClientPagePolicy[];
} {
    const client: Client = {
        id: data.id,
        name: data.name,
        lastName: data.lastName,
        address: data.address,
        birthDay: new Date(data.birthDay),
        phone: data.phone,
        country: data.country,
        userId: data.userId
    };
    const policies: ClientPagePolicy[] = data.policies;
    return { client, policies };
}

export function adaptClientListData(data: any[]): HomePageClient[] {
    const homePageClients: HomePageClient[] = data.map((client) => ({
        id: client.id,
        name: client.name,
        lastName: client.lastName
    }));
    return homePageClients;
}
