import type { Client } from './types/client';
import { Policy } from './types/policy';

// CLIENT
export const client1: Client = {
    id: 1,
    name: 'John',
    lastName: 'Doe',
    address: '123 Main St',
    birthDay: new Date('1990-01-01'),
    phone: '+1234567890',
    country: 'Estados Unidos',
    userId: 123
};

const client2: Client = {
    id: 2,
    name: 'Alice',
    lastName: 'Smith',
    address: '456 Elm St',
    birthDay: new Date('1985-05-15'),
    phone: '+1987654321',
    country: 'Canada',
    userId: 456
};

const client3: Client = {
    id: 3,
    name: 'Emily',
    lastName: 'Johnson',
    address: '789 Oak St',
    birthDay: new Date('1978-09-20'),
    phone: '+1122334455',
    country: 'UK',
    userId: 789
};

const client4: Client = {
    id: 4,
    name: 'Michael',
    lastName: 'Brown',
    address: '101 Pine St',
    birthDay: new Date('1982-03-10'),
    phone: '+4455667788',
    country: 'Australia',
    userId: 101
};

const client5: Client = {
    id: 5,
    name: 'Sophia',
    lastName: 'Martinez',
    address: '202 Maple St',
    birthDay: new Date('1995-07-25'),
    phone: '+6677889900',
    country: 'Mexico',
    userId: 202
};

export const clients: Client[] = [client1, client2, client3, client4, client5];

export const policy1: Policy = {
    id: 1,
    startDate: new Date('1982-03-10'),
    endDate: new Date('1982-04-10'),
    productName: 'A todo riesgo',
    companyName: 'Sancor Seguros',
    branchName: '200',
    clientId: client1.id
};

export const policy2: Policy = {
    id: 2,
    startDate: new Date('2005-08-20'),
    endDate: new Date('2006-08-20'),
    productName: 'Seguro de vida',
    companyName: 'La Caja Seguros',
    branchName: '500',
    clientId: client1.id
};

export const policy3: Policy = {
    id: 3,
    startDate: new Date('2010-12-05'),
    endDate: new Date('2011-12-05'),
    productName: 'Seguro de automóvil',
    companyName: 'Provincia Seguros',
    branchName: '800',
    clientId: client1.id
};

export const policy4: Policy = {
    id: 4,
    startDate: new Date('2018-06-15'),
    endDate: new Date('2023-06-15'),
    productName: 'Seguro de hogar',
    companyName: 'Allianz',
    branchName: '300',
    clientId: client1.id
};

export const policy5: Policy = {
    id: 5,
    startDate: new Date('2023-01-01'),
    endDate: new Date('2024-01-01'),
    productName: 'Seguro de salud',
    companyName: 'Swiss Medical',
    branchName: '600',
    clientId: client1.id
};

export const policy6: Policy = {
    id: 6,
    startDate: new Date('2015-03-10'),
    endDate: new Date('2015-04-10'),
    productName: 'Seguro de viaje',
    companyName: 'Travel Ace Assistance',
    branchName: '700',
    clientId: client1.id
};

export const policiesTest: Policy[] = [
    policy1,
    policy2,
    policy3,
    policy4,
    policy5,
    policy6
];
