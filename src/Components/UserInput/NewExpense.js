import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  //set the state for the button by default it will be false so form remains hidden
  const [addingExpense, setAddingExpense] = useState(false);
  const gettingFormData = (inputs) => {
    const newInputs = {
      ...inputs,
      id: Math.trunc(Math.random(1) * 100),
    };

    props.storedIdOpbject(newInputs);
    setAddingExpense(false);
  };

  //button handler so it set useState to true once button is clicked!
  const showForm = () => {
    //set the state to true once button is clicked
    setAddingExpense(true);
  };

  const hideForm = () => {
    setAddingExpense(false);
  };

  return (
    <div className="new-expense">
      {!addingExpense && (
        <button className="hideBtn" onClick={showForm}>
          Add New Expenses
        </button>
      )}
      {addingExpense && (
        <ExpenseForm
          inputFormData={gettingFormData}
          cancelAddingExpense={hideForm}
        />
      )}
    </div>
  );
}

export default NewExpense;
