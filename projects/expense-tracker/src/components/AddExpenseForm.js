import React, { useState,useContext } from 'react';
import { AppContext } from '../context/AppContext';
import {v4 as uuidv4} from 'uuid';
const AddExpenseForm = () => {

    const [name,setName]=useState('');
    const [cost,setCost]=useState('');
    const {dispatch} = useContext(AppContext);
    function submit(event){
        event.preventDefault();
        const payload={
            id:uuidv4(),
            name:name,
            cost:parseInt(cost)
        }
        console.log('before dispatch',payload);
        dispatch({
            type:'ADD_EXPENSE',
            payload:payload
        });
    }
	return (
		<form onSubmit={submit}>
			<div className='row'>
				<div className='col-sm'>
					<label for='name'>Name</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='name'
                        onInput={(e)=>setName(e.target.value)}
					></input>
				</div>
				<div className='col-sm'>
					<label for='cost'>Cost</label>
					<input
						required='required'
						type='text'
						className='form-control'
						id='cost'
                        onInput={(e)=>setCost(e.target.value)}
					></input>
				</div>

			</div>
            <div className='row'>
            	<div className='col-sm'>
					<button type='submit' className='btn btn-primary mt-3'>
						Save
					</button>
				</div>
            </div>
		</form>
	);
};

export default AddExpenseForm;