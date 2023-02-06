import './ExpenseDetails.css';

const ExpenseDetails = (props) => {
  return (
    <div>
      <p className="expense-item__price">Rs.{props.amount}</p>
    </div>
  );
};

export default ExpenseDetails;