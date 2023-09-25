import './App.css';
import First from './First';
import Edit from './Edit';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';


function App() {

  const [editData, setEditData] = useState();
  const [complete, setComplete] = useState([]);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Button />} />
          <Route path="First" element={<First complete={complete} setComplete={setComplete} setEditData={setEditData} />} />
          <Route path='Edit' element={<Edit setComplete={setComplete} editData={editData} />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
