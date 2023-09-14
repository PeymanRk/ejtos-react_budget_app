import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses, currency} = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const htmlElRef = useRef(null)
    const handleBudgetChange = (event) => {        
        if (event.target.value > 20000) {
            alert('Budget cannot be more than 20,000');
            return 
        }       
        dispatch({type: 'SET_BUDGET', payload: event.target.value});
    }
    const handleBlurChange = (event) => {        
        if (event.target.value < totalExpenses)
        {
            alert('Budget cannot be less than the spendings');
            dispatch({type: 'SET_BUDGET', payload: totalExpenses});
            return 
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" ref={htmlElRef} step="10" value={budget} onChange={handleBudgetChange} onBlur={handleBlurChange}></input>
</div>
    );
};
export default Budget;