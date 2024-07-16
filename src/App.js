//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import NoPage from './pages/NoPage'
import MarketingChecklist from './pages/MarketingChecklist';
import { PDFDownloadLink, Document, Text, View, Page} from '@react-pdf/renderer';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route index element={<Home />} />
        <Route path='marketing' element={<MarketingChecklist />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
