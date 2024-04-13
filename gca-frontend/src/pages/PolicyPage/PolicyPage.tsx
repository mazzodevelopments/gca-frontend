import { useLoaderData } from 'react-router-dom';
import { PolicyLoaderResults } from './policyLoader';
import { containerDiv, listDiv, listH1, mainH1 } from '../../styleClassNames';

export default function PolicyPage() {
    const { policy } = useLoaderData() as PolicyLoaderResults;
    const { startDate, endDate, productName, branchName, companyName } = policy;
    return (
        <div className={containerDiv}>
            <div>
                <h1 className={mainH1}>Poliza</h1>
                <div className={listDiv}>
                    <h1 className={listH1}>Fecha de inicio:</h1>
                    <span className="font-medium">
                        {startDate.toLocaleDateString() || 'No disponible'}
                    </span>
                </div>
                <div className={listDiv}>
                    <h1 className={listH1}>Fecha de finalización:</h1>
                    <span className="font-medium">
                        {endDate.toLocaleDateString() || 'No disponible'}
                    </span>
                </div>
                <div className={listDiv}>
                    <h1 className={listH1}>Nombre del producto:</h1>
                    <span className="font-medium">
                        {productName || 'No disponible'}
                    </span>
                </div>
                <div className={listDiv}>
                    <h1 className={listH1}>Nombre del ramo:</h1>
                    <span className="font-medium">
                        {branchName || 'No disponible'}
                    </span>
                </div>
                <div className={listDiv}>
                    <h1 className={listH1}>Nombre de la compania:</h1>
                    <span className="font-medium">
                        {companyName || 'No disponible'}
                    </span>
                </div>
            </div>
        </div>
    );
}
