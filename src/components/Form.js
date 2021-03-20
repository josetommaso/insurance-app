import React from 'react';
import styled from '@emotion/styled';

const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    --webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 0.2rem 0 1.5rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover {
        cursor: pointer;
        background-color: #26c6da;
    }
`;

const Form = () => {
    return ( 
        <form>
            <Field>
                <Label>Brand</Label>
                <Select>
                    <option value="">-- Select a brand --</option>
                    <option value="american">American</option>
                    <option value="europe">Europe</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select>
                    <option value="">-- Select a year --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Packeage</Label>
                <InputRadio 
                    type="radio"
                    name="packeage"
                    value="third-party"
                />Third party
                <InputRadio 
                    type="radio"
                    name="packeage"
                    value="comprehensive"
                />Comprehensive
            </Field>
            <Button type="button">Get quote</Button>
        </form>
     );
}
 
export default Form