import JournalItem from "./JournalItem";
import classes from "./JournalList.module.css";

function JournalList(props) {
  return (
    <ul classname={classes.list}>
      {props.journals.map((journal) => (
        <JournalItem
          key={journal.id}
          title={journal.title}
          image={journal.image}
          category={journal.category}
          essay={journal.essay}
        />
      ))}
    </ul>
  );
}

export default JournalList;
