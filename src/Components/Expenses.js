import React, { useState } from "react";
import Card from "./UI/Card";
import "./CSS/Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChrt from "./Charts/ExpensesChrt";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterYearChanger = (selectedYear) => {
    setFilterYear(selectedYear);
  };

     //Module 5 lecure 64. Handling Filter year so user can see the list by chosen Year

     const pickYear = props.items.filter(new1 => {
       return new1.date.getFullYear().toString() ===filterYear;
     })


  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          defaultYear={filterYear}
          changeYear={filterYearChanger}
        />
        <ExpensesChrt expenses={pickYear} />
         <ExpensesList items={pickYear} />
      </Card>
    </div>
  );
};

export default Expenses;
