import { useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
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

  const [ summary, setSummary ] = useState({
    quote: 0,
    data: {
      brand: '',
      year: '',
      packeage: ''
    }
  });
  const { data } = summary

  return (
    <Container>
        <Header
          title="Car Insurance Quotes"
        />
        <ContainerForm>
          <Form
            setSummary={setSummary}
          />
          <Summary 
            data={data}
          />
        </ContainerForm>
    </Container>
  );
}

export default App;
