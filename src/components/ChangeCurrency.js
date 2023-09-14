import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const ChangeCurrency = () => {
    const { budget, dispatch } = useContext(AppContext);    
    const handleCurrencyChange = (event) => {        
        dispatch({type: 'CHG_CURRENCY', payload: event.target.value});
    }    
    return (
        <div className="alert alert-success">            
        <span>Currency: </span>
            <select className="alert alert-success m-0 p-0" id="inputGroupSelect01" onChange={handleCurrencyChange}>                
                <option defaultValue value="£" name="£ Pound">£ Pound</option>
                <option value="$" name="$ Dollar">$ Dollar</option>
                <option value="€" name="€ Euro"> € Euro</option>
                <option value="₹" name="₹ Ruppee">₹ Ruppee</option>
            </select>
        </div>
    );
};
export default ChangeCurrency;