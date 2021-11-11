import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start";
import WpeJournalsPage from "./pages/WpeJournals";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path="/" element={<StartPage/>} />
        <Route path="/wpe" element={<WpeJournalsPage/>} />
      </Routes>
    </div>  );
}
export default App;
