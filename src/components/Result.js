import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const Message = styled.p`
    background-color: rgba(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultQuote = styled.div`
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #26c6da;
    background-color: rgba(127, 224, 237);
    margin-top: 1rem;
    position: relative;
`;

const TextQuote = styled.p`
    color: #00838f;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    margin: 0;
`;

const Result = ({quote}) => {

    return (
        (quote === 0) ? <Message>Please choose a Brand, year and packeage</Message>
        : 
        (
        <ResultQuote>
            <TransitionGroup
                component="span"
                className="resultado"
            >
                <CSSTransition
                    classNames="resultado"
                    key={quote}
                    timeout={{ enter: 500, exit: 500 }}
                >
                    <TextQuote>Annual Premium: £<span>{ quote }</span></TextQuote>
                </CSSTransition>
            </TransitionGroup>
        </ResultQuote>
        )
    )
}

Result.propTypes = {
    quote: PropTypes.number.isRequired,
}
 
export default Result;