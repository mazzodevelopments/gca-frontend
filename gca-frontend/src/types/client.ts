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
    birthDay: string;
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
    userId: number;
    policies: {
        id: number;
        branchName: string;
        companyName: string;
    }[];
}

export interface HomePageClient {
    id: number;
    name: string;
    lastName: string;
}
