/* eslint-disable @typescript-eslint/no-explicit-any */
import { Client, GettableClient } from '../types/client';

export function adaptClientData(data: any): Client {
    return {
        id: data.id,
        name: data.name,
        lastName: data.lastName,
        address: data.address,
        birthDay: new Date(data.birthDay),
        phone: data.phone,
        country: data.country,
        userId: data.userId
    };
}

export default function adaptClientPageData(client: any): GettableClient {
    return {
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
}

export function adaptClientListData(data: any[]): Client[] {
    return data.map((client) => ({
        id: client.id,
        name: client.name,
        lastName: client.lastName,
        address: client.address,
        birthDay: new Date(client.birthDay),
        phone: client.phone,
        country: client.country,
        userId: client.userId
    }));
}
