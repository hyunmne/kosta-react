import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Login';
import User from './User';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        <Route exact path="/user" element={<User/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
