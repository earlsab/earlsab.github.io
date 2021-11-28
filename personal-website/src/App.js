import { Routes, Route } from "react-router-dom";
import StartPage from "./pages/Start";
import WpeJournalsPage from "./pages/WpeJournals";
import WpeJournalsForm from "./pages/WpeNewJournals";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/wpe" element={<WpeJournalsPage />} />
          <Route path="/wpeform" element={<WpeJournalsForm />} />
        </Routes>
      </Layout>
    </div>
  );
}
export default App;
