import Header from './components/Header';
import Form from './components/Form';
import styled from '@emotion/styled';


const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #fff;
  padding: 3rem;
`;

function App() {
  return (
    <Container>
        <Header
          title="Car Insurance Quotationer"
        />
        <ContainerForm>
          <Form />
        </ContainerForm>
    </Container>
  );
}

export default App;
