import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { UploadForm } from './pages/UploadForm';
import { Home } from './pages/Home';

function App() {
  return (
    <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/upload' element={< UploadForm />}></Route>
   </Routes>
  );
}

export default App;
