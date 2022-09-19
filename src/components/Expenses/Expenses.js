import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenses = (enteredExpenseFilter) => {
        setFilteredYear(enteredExpenseFilter);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === Number(filteredYear))
    let expensesContent = <p>No expenses found</p>
    if(filteredExpenses.length > 0) {
        expensesContent = filteredExpenses?.map((expense) => <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}></ExpenseItem>)
    }
    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilter={filterExpenses}></ExpensesFilter>
            {expensesContent}

        </Card>
        </div>
    )
}

export default Expenses;