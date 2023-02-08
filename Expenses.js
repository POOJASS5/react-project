import React from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';


const Expenses = (props) => {
    return (
      <Card className="expenses">
        {props.items.map((data, i) => {
          return(
            <ExpenseItem
            key={i}
            id={data.id}
            title={data.title}
            date={data.date}
            location={data.location}/>
          );
        })}
      </Card>
    );
  }
  
  export default Expenses;