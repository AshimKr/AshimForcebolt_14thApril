import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmout: "",
    //     enteredDate: ""
    // })

    
    const changeTitleHandler = (event) =>{
        setEnteredTitle(event.target.value);
        // setUserInput((prevState) => {
        //     return (
        //         {...prevState,
        //         enteredTitle : event.target.value}
        //     )
        // })
    }
    const changeAmoutHandler = event =>{
        setEnteredAmount(event.target.value);

        // setUserInput((prevState)=>{
        //     return({
        //         ...prevState,
        //         enteredAmout:event.target.value
        //     })
        // })
    }
    const changeDateHandler = event => {
        setEnteredDate(event.target.value);
        // setUserInput((prevState)=>{
        //     return {
        //         ...prevState,
        //         enteredDate:event.target.value
        //     }
        // })
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        const userData = {
            title : enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        };
        props.onSaveExpenseData(userData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text"
          value={enteredTitle} 
          onChange={changeTitleHandler}/>
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" 
            min="0.1" step="0.1"
            value={enteredAmount}
            onChange={changeAmoutHandler} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" 
          min="2022-01-01" 
          max="2024-12-31" 
          value={enteredDate}
          onChange={changeDateHandler}/>
        </div>
      </div>
      <div className="new-expense__control">
          <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
