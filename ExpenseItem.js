import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';




const  ExpenseItem = (props) => {
    

    return(
    <Card className='expense-item'>
       <ExpenseDate date={props.date}></ExpenseDate>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            
            
            
            
            
            <p className="expense-item__description">{props.location}</p>
            <ExpenseDetails amount={props.amount} />




            
           
            
        </div>
    </Card>
    );
}
export default ExpenseItem;