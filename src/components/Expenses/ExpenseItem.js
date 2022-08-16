import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import {useState} from "react";

function ExpenseItem(props) {
    //props are key value pairs
    const [title, setTitle] = useState(props.title);
    //useState returns an array where the first element is the current state value and
    // the second element is the function to change it

    const updateTitle = () => {
        //state updating function ->
        // the component where this method is called will be executed again
        setTitle('hello')
    }

    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
                <button onClick={updateTitle}>Change title</button>
            </div>

        </Card>
    );
}

export default ExpenseItem;