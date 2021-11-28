import classes from "./JournalItem.module.css";

function JournalItem(props) {
  return (
    <li className={classes.item}>
      <div className={classes.image}>
        <img src={props.image} alt={props.title} />
      </div>
      <div className={classes.content}>
        <h3>{props.title}</h3>
        <p>{props.essay}</p>
        <p>{props.category}</p>
      </div>
    </li>
  );
}

export default JournalItem;
