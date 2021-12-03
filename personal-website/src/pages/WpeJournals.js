import { useState, useEffect } from "react";
import JournalList from "../components/wpe-journals/JournalList";

function WpeJournalsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedJournals, setLoadedJournals] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://personal-website-b35b4-default-rtdb.asia-southeast1.firebasedatabase.app/journals.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const journals = [];

        for (const key in data) {
          const journal = {
            id: key,
            ...data[key],
          };
         journals.push(journal);
        }
        setIsLoading(false);
        setLoadedJournals(journals);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>WPE</h1>
      <JournalList journals={loadedJournals} />
    </section>
  );
}

export default WpeJournalsPage;
