import type { Params } from 'react-router-dom';
import type { Client } from '../../types/client';
import { Policy } from '../../types/policy';
// TEST
import { client1, policiesTest } from '../../testData';

interface LoaderArgs {
    params: Params;
}

export interface ClientLoaderResults {
    client: Client;
    policies: Policy[];
}

export async function clientLoader({
    params
}: LoaderArgs): Promise<ClientLoaderResults> {
    const { id } = params;

    if (!id) {
        throw new Error('Name must be provided');
    }

    return { client: client1, policies: policiesTest };
}

// EN ESTE LOADER VOY A TENER QUE RECIBIR EL ID DEL CLIENTE POR PARAMETRO
// Y CON ESO LLAMAR GETUSER(ID) PARA QUE ME DEVUELVA EL OBJETO DEL CLIENTE
