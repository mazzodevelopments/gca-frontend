import { useNavigate } from 'react-router-dom';
import { PolicyLoaderResults } from './policyLoader';
import { listDiv, listH1, mainH1, actionButton } from '../../styleClassNames';
import useData from '../../hooks/use-data';
import Container from '../../components/Container';

export default function PolicyPage() {
    const { policy } = useData<PolicyLoaderResults>();
    const { startDate, endDate, productName, branchName, companyName } = policy;
    const navigate = useNavigate();

    return (
        <Container isMain>
            <Container>
                <div>
                    <div className="flex justify-between items-center">
                        <h1 className={mainH1}>Poliza</h1>
                        <button
                            className={actionButton}
                            onClick={() =>
                                navigate(`${window.location.pathname}/edit`)
                            }
                        >
                            Editar Poliza
                        </button>
                    </div>
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
            </Container>
        </Container>
    );
}
