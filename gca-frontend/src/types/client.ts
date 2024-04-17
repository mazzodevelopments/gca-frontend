export interface Client {
    id: number;
    name: string;
    lastName: string;
    address: string;
    birthDay: Date;
    phone: string;
    country: string;
    userId: number;
}

export interface AddableClient {
    name: string;
    lastName: string;
    address: string;
    birthDay: Date;
    phone: string;
    country: string;
    userId: number;
}
