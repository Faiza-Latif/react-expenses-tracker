import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenses = (enteredExpenseFilter) => {
        setFilteredYear(enteredExpenseFilter);
    }
    const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === Number(filteredYear))

    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilter={filterExpenses}></ExpensesFilter>
            <ExpensesChart filteredExpenses={filteredExpenses}></ExpensesChart>
            <ExpensesList expenses={filteredExpenses}></ExpensesList>

        </Card>
        </div>
    )
}

export default Expenses;