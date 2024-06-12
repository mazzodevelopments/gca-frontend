import { ClientPagePolicy } from './policy';

export interface Client {
    clientId: number;
    name: string;
    lastName: string;
    address: string;
    birthDay: string;
    phone: string;
    country: string;
    fk_userID: number;
}

export interface AddableClient {
    name: string;
    lastName: string;
    address: string;
    birthDay: string;
    phone: string;
    country: string;
    fk_userID: number;
}

export interface EditableClient {
    clientId: number;
    name: string;
    lastName: string;
    address: string;
    birthDay: Date;
    phone: string;
    country: string;
    fk_userID: number;
}

export interface GettableClient {
    id: number;
    name: string;
    lastName: string;
    address: string;
    birthDay: Date;
    phone: string;
    country: string;
    fk_userID: number;
    policies: ClientPagePolicy[];
}

export interface HomePageClient {
    clientId: number;
    name: string;
    lastName: string;
}
