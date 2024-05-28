import type { Params } from 'react-router-dom';
import type { Client } from '../../../types/client';
import { ClientPagePolicy } from '../../../types/policy';
import { getClientPageData } from '../../../services/clientService';

interface LoaderArgs {
    params: Params;
}

export interface ClientLoaderResults {
    client: Client;
    policies: ClientPagePolicy[];
}

export async function clientLoader({
    params
}: LoaderArgs): Promise<ClientLoaderResults | null> {
    const { clientId } = params;

    if (!clientId) {
        throw new Error('Client id must be provided');
    }

    const data = await getClientPageData(parseInt(clientId));

    if (!data) {
        return null;
    }

    const client: Client = data.client;
    const policies: ClientPagePolicy[] = data.policies ?? [];

    return { client, policies };
}
