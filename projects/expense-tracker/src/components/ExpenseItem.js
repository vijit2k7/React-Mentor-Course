import React,{useContext} from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {

    const {dispatch}=useContext(AppContext);

    function onDispatch(){
        dispatch({type:'DELETE',payload:props.id});
    }
	return (
		<li className='list-group-item d-flex justify-content-between align-items-center'>
			{props.name}
			<div>
				<span>
					Rs{props.cost}
				</span>
				<TiDelete size='1.5em' onClick={onDispatch}></TiDelete>
			</div>
		</li>
	);
};

export default ExpenseItem;