import { AddableClient } from '../types/client';

export const createClient = (client: AddableClient) => {
    console.log(client);
    return 1; // DEBE DEVOLVER EL ID DEL CLIENTE CREADO
};
