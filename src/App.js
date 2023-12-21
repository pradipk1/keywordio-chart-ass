
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import CreateAds from './Components/CreateAds/CreateAds';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Dashboard />}/>
        <Route path='/create-ads' element={<CreateAds />}/>
      </Routes>
    </div>
  );
}

export default App;
