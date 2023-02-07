import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';




const  ExpenseItem = (props) => {
   
    const clickHandler1 = () => {
        console.log('Clicked!!!!');

        
    }
    const clickHandler2 = () => {
        console.log('deleted');
        
        
    }
    return(
    <Card className='expense-item'>
       <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            
            
            
            
            
            <p className="expense-item__description">{props.location}</p>
            <ExpenseDetails amount={props.amount} />




            
           
            
        </div>
        <button onClick={clickHandler1}>Change Title</button>
        <button onClick={clickHandler2}>delete</button>
    </Card>
    );
}
export default ExpenseItem;