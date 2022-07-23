import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./CSS/ExpensesList.css";
function ExpensesList(props) {
  //now we can use if statement to check if the year selected has no Data

  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense Found</h2>;
  }

  return (
    <div>
      <ul className="expenses-list">
        {props.items.map((expense, index) => (
          <ExpenseItem
            key={index}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </div>
  );
}

export default ExpensesList;
