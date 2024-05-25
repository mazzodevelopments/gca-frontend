export interface Policy {
    id: number;
    startDate: Date;
    endDate: Date;
    productName: string;
    branchName: string;
    companyName: string;
    clientId: number;
}

export interface AddablePolicy {
    startDate: Date;
    endDate: Date;
    productName: string;
    branchName: string;
    companyName: string;
    clientId: number;
}

export interface ClientPagePolicy {
    id: number;
    branchName: string;
    companyName: string;
}
