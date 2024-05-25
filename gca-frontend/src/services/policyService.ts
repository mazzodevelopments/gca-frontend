import { AddablePolicy, Policy } from '../types/policy';

export const createPolicy = (newPolicy: AddablePolicy) => {
    console.log(newPolicy);
    return 1; // DEBE DEVOLVER EL ID DE LA POLIZA CREADA
};

export const updatePolicy = (editedPolicy: Policy) => {
    console.log(editedPolicy);
};

// EN ESTE FILE TENER METODO PARA HACER EL UPDATE Y EL CREATE DE POLIZA
export const deletePolicy = (policyId: number) => {
    console.log(`Poliza con id: ${policyId} eliminada`);
};

export async function getPolicyData(policyId: number) {
    try {
        console.log('Datos ' + policyId);
        const response = await fetch(
            'https://6600a57387c91a1164198f19.mockapi.io/gca/clients'
        );
        const data = await response.json();
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}
