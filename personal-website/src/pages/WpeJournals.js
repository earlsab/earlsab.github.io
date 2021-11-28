import JournalList from "../components/journals/JournalList";

const DUMMY_DATA = [
  {
    id: '01',
    title: 'CCS - Opening Devotions',
    image: 'https://thumbs.dreamstime.com/z/vervet-monkey-chlorocebus-pygerythrus-5204535.jpg',
    category: 'Church',
    essay: 'TestTest Test Test Test'
  },
  {
    id: '02',
    title: 'Second Something',
    image: 'https://thumbs.dreamstime.com/z/vervet-monkey-chlorocebus-pygerythrus-5204535.jpg',
    category: 'Church',
    essay: 'TestTest Test Test Test'
  }
];

function WpeJournalsPage() {
  return (
    <section>
      <h1>WPE</h1>
      <JournalList journals={DUMMY_DATA}/>
    </section>
  );
}

export default WpeJournalsPage;
