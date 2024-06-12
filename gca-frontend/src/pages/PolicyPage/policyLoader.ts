import type { Params } from 'react-router-dom';
import { Policy } from '../../types/policy';
// TEST
const policy1: Policy = {
    id: 1,
    startDate: new Date('1982-03-10'),
    endDate: new Date('1982-04-10'),
    productName: 'A todo riesgo',
    companyName: 'Sancor Seguros',
    branchName: '200',
    clientId: 5
};

interface LoaderArgs {
    params: Params;
}

export interface PolicyLoaderResults {
    policy: Policy;
}

export async function policyLoader({
    params
}: LoaderArgs): Promise<PolicyLoaderResults> {
    const { policyId } = params;

    if (!policyId) {
        throw new Error('Name must be provided');
    }

    return { policy: policy1 };
}

// EN ESTE LOADER VOY A TENER QUE RECIBIR EL ID DE LA POLIZA POR PARAMETRO
// Y CON ESO LLAMAR GETPOLICY(ID) PARA QUE ME DEVUELVA EL OBJETO DEL CLIENTE
