import { useNavigate } from 'react-router-dom';
import { PolicyLoaderResults } from './policyLoader';
import { mainH1, actionButton } from '../../styleClassNames';
import useData from '../../hooks/use-data';
import Container from '../../components/Container';
import ListDiv from '../../components/ListDiv';

export default function PolicyPage() {
    const { policy } = useData<PolicyLoaderResults>();
    const { startDate, endDate, productName, branchName, companyName } = policy;
    const navigate = useNavigate();

    return (
        <Container isMain>
            <Container>
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
                <ListDiv label="Fecha de inicio:">
                    {startDate.toLocaleDateString() || 'No disponible'}
                </ListDiv>
                <ListDiv label="Fecha de finalización:">
                    {endDate.toLocaleDateString() || 'No disponible'}
                </ListDiv>
                <ListDiv label="Nombre del producto:">
                    {productName || 'No disponible'}
                </ListDiv>
                <ListDiv label="Nombre del ramo:">
                    {branchName || 'No disponible'}
                </ListDiv>
                <ListDiv label="Nombre de la compañia:">
                    {companyName || 'No disponible'}
                </ListDiv>
            </Container>
        </Container>
    );
}
