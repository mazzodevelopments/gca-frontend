/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client, GettableClient, HomePageClient } from '../types/client';

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

export default function adaptClientPageData(client: any): GettableClient {
    const gettableClient: GettableClient = {
        id: client.id,
        name: client.name,
        lastName: client.lastName,
        address: client.address,
        birthDay: new Date(client.birthDay),
        phone: client.phone,
        country: client.country,
        userId: client.userId,
        policies: client.policies
    };
    return gettableClient;
}

export function adaptClientListData(data: any[]): HomePageClient[] {
    const homePageClients: HomePageClient[] = data.map((client) => ({
        id: client.id,
        name: client.name,
        lastName: client.lastName
    }));
    return homePageClients;
}
