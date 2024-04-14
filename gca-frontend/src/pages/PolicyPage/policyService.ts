import { AddablePolicy, Policy } from '../../types/policy';

export const updatePolicy = (editedPolicy: Policy) => {
    console.log(editedPolicy);
};

export const createPolicy = (newPolicy: AddablePolicy) => {
    console.log(newPolicy);
    return 1; // DEBE DEVOLVER EL ID DE LA POLIZA CREADA
};

// EN ESTE FILE TENER METODO PARA HACER EL UPDATE Y EL CREATE DE POLIZA
