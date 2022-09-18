import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import {useState} from "react";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterExpenses = (enteredExpenseFilter) => {
        setFilteredYear(enteredExpenseFilter);
        console.log(filteredYear);
    }
    return (
        <div>
        <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onFilter={filterExpenses}></ExpensesFilter>
            {props.expenses.map((expense) => <ExpenseItem
                title={expense.title}
                amount={expense.amount}
                date={expense.date}></ExpenseItem>)}




        </Card>
        </div>
    )
}

export default Expenses;