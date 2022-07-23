import React from "react";
import { useState } from "react";
import "./ExpenseForm.css"

function ExpenseForm(props) {
  const [enteredTitle, setTitle] = useState("");
  const [enteredDate, setDate] = useState("");
  const [enteredAmount, setAmount] = useState("");

  //User Inserted Title Handling
  const titleHandler = (event) => {
    setTitle(event.target.value);
    
  };

  //amount Value Handling
  const amountHandler = (event) => {
    setAmount(event.target.value);
    
  };

  const dateHandler = (event) => {
    setDate(event.target.value);
    
  };

  //Form upon Submission Handling'

  const formSubmitHandler = (event) => {
      event.preventDefault();
        //lets Store User Input In An Object
        const userInputs ={
            title: enteredTitle,
            amount: +enteredAmount,
            date:new Date(enteredDate),
        };

        props.inputFormData(userInputs);

        setTitle("");
        setAmount("");
        setDate("");
  };    

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"  onChange={titleHandler}
          value={enteredTitle} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number"  onChange={amountHandler}
          value={enteredAmount} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateHandler}
            value={enteredDate}
          />
        </div>

        <div className="new-expense_actions">
        <button type="button" onClick={props.cancelAddingExpense}>Cancel</button>
          <button>Add Expense</button>
        </div>
      </div>
    </form>
  );
}
export default ExpenseForm;
