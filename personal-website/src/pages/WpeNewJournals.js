import Card from "../components/ui/Card";
import NewJournalForm from "../components/wpe-journals/NewJournalForm";
import { useNavigate } from "react-router-dom";

function WpeJournalsForm() {
  const navigate = useNavigate();

  function addJournalHandler(journalData) {
    fetch(
      "https://personal-website-b35b4-default-rtdb.asia-southeast1.firebasedatabase.app/journals.json",
      {
          method: 'POST',
          body: JSON.stringify(journalData),
          headers: {
              'Content-Type': 'application/json'
          }
      }
    ).then(() => {
      navigate('/wpe');
    });
  }

  return (
    <section>
      <h1>Add New Entry</h1>
      <NewJournalForm onAddJournal={addJournalHandler} />
    </section>
  );
}

export default WpeJournalsForm;
