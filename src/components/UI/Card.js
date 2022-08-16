import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;
    // children is reserved for the content inside opening and closing tags
    return <div className={classes}>{props.children}</div>;
}

export default Card;