import classes from "./NewJournalForm.module.css";
import Card from "../ui/Card";
import { useRef } from 'react';

function NewJournalForm() {
    const titleInputRef = useRef();
    
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
    }
  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor>Journal Entry</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor>Image</label>
          <input type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor>Category</label>
          <input type="text" required id="category" />
        </div>
        <div className={classes.control}>
          <label htmlFor>Essay</label>
          <textarea id="essay" required rows="5"></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Journal</button>
        </div>
      </form>
    </Card>
  );
}

export default NewJournalForm;
