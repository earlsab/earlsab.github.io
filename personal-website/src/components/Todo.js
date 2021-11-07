import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // Prop allows recieved values, a react concept.
  const [modalIsOpen, setModalIsOpen] = useState(false); // "React hooks, Array Destructuring"

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          DELETE
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;

/* Tutorial Notes:

{ modalIsOpen && <Modal /> } operates as
 if modalIsOpen and <Modal /> is true 
 Note: Modal a component function will always be true, and because
 it satisfies && the second statement will be called
 
 
 
 
 
 */
