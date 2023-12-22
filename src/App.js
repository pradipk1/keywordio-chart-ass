
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateAds from './Components/CreateAds/CreateAds';
import TextAdsFillData from './Components/TextAdsFillData/TextAdsFillData';
import MediaAdsFillData from './Components/MediaAdsFillData/MediaAdsFillData';
import AdSubmitted from './Components/AdSubmitted/AdSubmitted';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/create-ads' element={<CreateAds />}/>
        <Route path='/textads-filldata' element={<TextAdsFillData />}/>
        <Route path='/mediaads-filldata' element={<MediaAdsFillData />}/>
        <Route path='/adsubmitted' element={<AdSubmitted />}/>
      </Routes>
    </div>
  );
}

export default App;
