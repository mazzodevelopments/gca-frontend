import type { Params } from 'react-router-dom';
import type { Client } from '../../../types/client';
import { getClientData } from '../../../services/clientService';

interface LoaderArgs {
    params: Params;
}

export interface EditClientLoaderResults {
    client: Client;
}

export async function editClientLoader({
    params
}: LoaderArgs): Promise<EditClientLoaderResults | null> {
    const { clientId } = params;

    if (!clientId) {
        throw new Error('Client id must be provided');
    }

    const data = await getClientData(parseInt(clientId));

    if (!data) {
        return null;
    }

    console.log(data);

    const client: Client = data;

    return { client };
}
