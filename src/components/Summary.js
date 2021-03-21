import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Li = styled.li`
    text-transform: capitalize;
`;

const Summary = ({data}) => {
    const {brand, year, packeage} = data;
    if( brand === '' || year === '' || packeage === '' ) return null

    return ( 
        <ContainerSummary>
            <h2>Quote summary</h2>
            <ul>
                <Li>Brand: { brand } </Li>
                <Li>Year: { year } </Li>
                <Li>Packeage: { packeage } </Li>
            </ul>
        </ContainerSummary>
     );
}

Summary.propTypes = {
    data: PropTypes.object.isRequired,
}
 
export default Summary;