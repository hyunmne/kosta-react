import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import {Routes, Route} from 'react-router-dom'; 
import Main from './component/Main';
import BoardList from './component/BoardList';
import BoardWrite from './component/BoardWrite';
import BoardDetail from './component/BoardDetail';

// : 가 붙으면 path가 아니라 파라미터를 뜻한다

function App() {
  return (
    <div>
      <Main/>
      <Routes>
        <Route exect path="/" element={<BoardList/>} />
        <Route exect path="/boardWrite" element={<BoardWrite/>} />
        <Route exect path="/boardDetail/:num" element={<BoardDetail />} />
      </Routes>
    </div>
  );
}

export default App;
