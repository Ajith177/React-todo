import './App.css';
import First from './First';
import Edit from './Edit';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="First" element={<First/>}/>
          <Route path="Edit" element={<Edit/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
