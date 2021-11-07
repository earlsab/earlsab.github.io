function Modal(props) {

    // the functions below can also be inputted on the onClick attribute itself
  function cancelHandler() {
    props.onCancel();
  }
  
  function comfirmHandler() {
    props.onConfirm();
  }


  return (
    <div className="modal">
      <p> Are you sure?</p>
      <button className="btn btn--alt" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn" onClick={comfirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
