import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'; 
import Main from './component/Main';
import BoardList from './component/BoardList';
import BoardWrite from './component/BoardWrite';
import BoardDetail from './component/BoardDetail';


function App() {
  return (
    <div>
      <Main/>
      <Routes>
        <Route exect path="/" element={<BoardList/>} />
        <Route exect path="/boardWrite" element={<BoardWrite/>} />
        <Route exect path="/boardDetail" element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
