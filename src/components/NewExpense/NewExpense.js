import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import React, {useState} from "react";

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(true);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        props.onAddExpense(expenseData);
        editingHandler();
    }


    const editingHandler = () => {
        //set the oposite of the previous value
        setIsEditing((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className='new-expense'>
            {!isEditing && <button onClick={editingHandler}> Add new Expense </button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={editingHandler}/>}
        </div>
    );
};

export default NewExpense;