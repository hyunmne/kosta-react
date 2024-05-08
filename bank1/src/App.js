import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { MakeAccount } from './MakeAccount';
import AccountInfo from './AccountInfo';
import Deposit from './Deposit';
import Withdraw from './Withdraw';
import AllAccountInfo from './AllAccountInfo';
import Join from './Join';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom'; 



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route exact path="/" element={<MakeAccount/>} />
        <Route exact path="/accountInfo" element={<AccountInfo/>} />
        <Route exact path="/deposit" element={<Deposit />} />
        <Route exact path="/withdraw" element={<Withdraw />} />
        <Route exact path="/allAccountInfo" element={<AllAccountInfo/>} />
        <Route exact path="/join" element={<Join/>}/>
        <Route exact path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
