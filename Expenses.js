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
  
  let expensesContent =  <p>No expenses found.</p>;

  if (filteredExpenses.length > 0) {
    expensesContent =(filteredExpenses.map((expense) => (
          
      <ExpenseItem
      key={expense.id}
      //id={data.id}
      title={expense.title}
      date={expense.date}
      amount={expense.amount}
      location={expense.location}
      />
    ))
  )
  }


    return (
      <div>
      <Card className="expenses">
        <ExpensesFilter 
         selected={filteredYear}
         onChangeFilter={filterChangeHandler} 
         />
         {expensesContent}
        
      </Card>
      </div>
    );
  }
  
  export default Expenses;