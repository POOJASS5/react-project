import React, {useState  } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';




const  ExpenseItem = (props) => {
   const[title, setTitle] = useState(props.title);
   const[amount,setAmount]=useState(props.amount);
   console.log('ExpenseItem evaluated by React');


    
    const clickHandler = () => {
        setTitle('updated!');
        console.log(title);

    }
    let clickHandler1 = () => {
        setAmount(amount + 100);
        console.log(amount);
      };
    return(
    <Card className='expense-item'>
       <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{title}</h2>
            <p className="expense-item__description">{props.location}</p>
            <ExpenseDetails amount={props.amount} />
        </div>
        <button onClick={clickHandler}>Change Title</button>
        <button onClick={clickHandler1}>Add</button>
    </Card>
    );
}
export default ExpenseItem;