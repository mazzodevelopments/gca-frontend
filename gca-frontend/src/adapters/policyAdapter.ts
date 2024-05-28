/* eslint-disable @typescript-eslint/no-explicit-any */
import { Policy } from '../types/policy';

export default function adaptPolicyData(data: any): Policy {
    const policy: Policy = {
        id: data.id,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        productName: data.productName,
        branchName: data.branchName,
        companyName: data.companyName,
        clientId: data.clientId
    };
    return policy;
}
