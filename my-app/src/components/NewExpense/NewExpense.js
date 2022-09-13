import React, {useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData)
        // console.log(expenseData)
    }
    const [show,setShow]=useState(false)
    return (
        <div className="new-expense">
           {show === false &&    <button type="submit" onClick={()=>setShow(true)}>Add New Expense</button> }
          {show === true &&  <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} />}
        </div>
    )
}

export default NewExpense;