import classes from "./NewJournalForm.module.css";
import Card from "../ui/Card";
import { useRef } from 'react';

function NewJournalForm(props) {
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const categoryInputRef = useRef();
    const essayInputRef = useRef();
    
    
    function submitHandler(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredCategory = categoryInputRef.current.value;
        const enteredEssay = essayInputRef.current.value;

        const journalData = {
            title: enteredTitle,
            image: enteredImage,
            category: enteredCategory,
            essay: enteredEssay,
        };

        props.onAddJournal(journalData)
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
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor>Category</label>
          <input type="text" required id="category" ref={categoryInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor>Essay</label>
          <textarea id="essay" required rows="5" ref={essayInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Journal</button>
        </div>
      </form>
    </Card>
  );
}

export default NewJournalForm;
