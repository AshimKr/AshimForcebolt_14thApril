import Card from "./Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

function Expenses(props) {
  const [year, setYear] = useState("2022");

  const setYearData = (yearData) => {
    setYear(yearData);
  };


  return (
    
    <Card className="expenses">
      <ExpensesFilter selected={year} onYearChange={setYearData} />

      
      {props.items.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        );
      })}
    </Card>
  );
}

export default Expenses;
