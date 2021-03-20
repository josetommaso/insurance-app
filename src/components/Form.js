import React, { useState } from 'react';
import styled from '@emotion/styled';
import { getYearsBetween } from '../helper';
import { calculateBrand } from '../helper';

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

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    text-align: center;
    margin-bottom: 2rem;
`;

const Form = () => {

    const [ data, setData ] = useState({
        brand: '',
        year: '',
        packeage: ''
    });

    const [ error, setError ] = useState(false);

    // get values from state
    const { brand, year, packeage } = data;

    // get values from form and put them into the state
    const getInfo = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        });
    }

    //when user submit the form
    const handleSubmit = e => {
        e.preventDefault();

        if(brand.trim() === '' || year.trim() === '' || packeage.trim() === '') {
            setError(true);
            return;
        }

        setError(false);

        //base from £2000
        let total = 2000;

        // get result between years
        const yearSubstraction = getYearsBetween(year);
        
        // if car is older = -3%
        total -= (( yearSubstraction * 3 ) * total) / 100;

        // american +15%
        // asian +5%
        // european +30%
        total = calculateBrand(brand) * total;

        // third party insurance +20%
        // comprehensive insurance +50%

        //total
    }

    return ( 
        <form onSubmit={handleSubmit}>

            { error ? <Error>All fields are required</Error> : null }

            <Field>
                <Label>Brand</Label>
                <Select
                    name="brand"
                    value={brand}
                    onChange={getInfo}
                >
                    <option value="">-- Select a brand --</option>
                    <option value="american">American</option>
                    <option value="european">Europe</option>
                    <option value="asian">Asian</option>
                </Select>
            </Field>

            <Field>
                <Label>Year</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={getInfo}
                >
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
                    checked={packeage === 'third-party'}
                    onChange={getInfo}
                />Third party
                <InputRadio 
                    type="radio"
                    name="packeage"
                    value="comprehensive"
                    checked={packeage === 'comprehensive'}
                    onChange={getInfo}
                />Comprehensive
            </Field>
            <Button type="submit">Get quote</Button>
        </form>
     );
}
 
export default Form