import { Fragment, useState } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';
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

  const [ loading, setLoading ] = useState(false);

  const { quote, data } = summary

  return (
    <Container>
        <Header
          title="Car Insurance Quotes"
        />
        <ContainerForm>
          <Form
            setSummary={setSummary}
            setLoading={setLoading}
          />

          { loading ? <Spinner /> : null }

          
          

          { !loading ?
            (
            <Fragment>
              <Summary 
                data={data}
              />
              <Result
                quote={quote}
              />
            </Fragment>
            )
          : 
            null
          }

          
        </ContainerForm>
    </Container>
  );
}

export default App;
