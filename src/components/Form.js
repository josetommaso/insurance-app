import React from 'react';

const Form = () => {
    return ( 
        <form>
            <div>
                <label>Brand</label>
                <select>
                    <option value="">-- Select a brand --</option>
                    <option value="american">American</option>
                    <option value="europe">Europe</option>
                    <option value="asian">Asian</option>
                </select>
            </div>

            <div>
                <label>Year</label>
                <select>
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
                </select>
            </div>

            <div>
                <label>Packeage</label>
                <input 
                    type="radio"
                    name="packeage"
                    value="third-party"
                />Third party
                <input 
                    type="radio"
                    name="packeage"
                    value="comprehensive"
                />Comprehensive
            </div>
            <button type="button">Get quote</button>
        </form>
     );
}
 
export default Form