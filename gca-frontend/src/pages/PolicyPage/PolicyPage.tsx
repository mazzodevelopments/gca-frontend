import { PolicyLoaderResults } from './policyLoader';
import useData from '../../hooks/use-data';
import Container from '../../components/Container';
import ListDiv from '../../components/ListDiv';
import ButtonHeader from '../../components/ButtonHeader';

export default function PolicyPage() {
    const { policy } = useData<PolicyLoaderResults>();
    const { startDate, endDate, productName, branchName, companyName } = policy;

    return (
        <Container isMain>
            <Container>
                <ButtonHeader
                    label="Poliza"
                    buttonText="Editar Poliza"
                    to={`${window.location.pathname}/edit`}
                />
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
