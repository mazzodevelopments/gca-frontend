import type { Params } from 'react-router-dom';
import type { Client } from '../../../types/client';
// TEST
import { client1 } from '../../../testData';

interface LoaderArgs {
    params: Params;
}

export interface EditClientLoaderResults {
    client: Client;
}

export async function editClientLoader({
    params
}: LoaderArgs): Promise<EditClientLoaderResults> {
    const { clientId } = params;

    if (!clientId) {
        throw new Error('Name must be provided');
    }

    return { client: client1 };
}
