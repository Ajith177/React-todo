import './App.css';
import First from './First';
import Edit from './Edit';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [editData,setEditData] = useState();
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="First" element={<First setEditData={setEditData}/>}/>
          <Route path='Edit' element={<Edit editData={editData}/>}/>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
