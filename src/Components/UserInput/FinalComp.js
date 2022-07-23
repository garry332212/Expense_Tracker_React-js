import React, { useState } from "react";
import Expenses from "../Expenses";
import NewExpense from "./NewExpense";

const dummy = [
  {
    id: "",
    date: new Date(2022, 4, 15),
    title: "Car Gas Fill Up",
    amount: 24.2,
  },
  { id: "", date: new Date(2021, 6, 25), title: "Rent", amount: 2200 },
  { id: "", date: new Date(2022, 9, 8), title: "Uni Fees", amount: 3000 },
  {
    id: "",
    date: new Date(2022, 2),
    title: "Cars & Bikes Rego& W.O.F",
    amount: 800,
  },
];

const FinalComp = () => {
  const [expenses, setExpenses] = useState(dummy);

  const finalExpenseHandler = (desi) => {
    setExpenses((prevData) => {
      return [desi, ...prevData];
    });
  };
  return (
    <div>
      <NewExpense storedIdOpbject={finalExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default FinalComp;
