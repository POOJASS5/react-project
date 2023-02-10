import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';



const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
    return (
      <div>
      <Card className="expenses">
        <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpenses.map((expense) => {
          return(
            <ExpenseItem
            key={expense.id}
            //id={data.id}
            title={expense.title}
            date={expense.date}
            amount={expense.amount}
            location={expense.location}/>
          );
        })}
      </Card>
      </div>
    );
  }
  
  export default Expenses;