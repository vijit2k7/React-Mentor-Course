import React,{useContext} from 'react';
import { AppContext } from '../context/AppContext';
const ExpenseTotal = () => {

    const {expenses}=useContext(AppContext);
    function calculateTotal()
    {
        let sum=0
        expenses.forEach((expense)=>{
            sum+=expense.cost;
        })
        return sum;
    }
	return (
		<div className='alert alert-primary'>
			<span>Spent so far: Rs.{calculateTotal()}</span>
		</div>
	);
};

export default ExpenseTotal;