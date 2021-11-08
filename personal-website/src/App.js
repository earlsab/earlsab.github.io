import Todo from "./components/Todo";
import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start";
import WpeJournalsPage from "./pages/WpeJournals";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/wpe" element={<WpeJournalsPage/>} />
      </Routes>
    </div>  );
}
export default App;
