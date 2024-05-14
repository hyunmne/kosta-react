import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './component/Header';
import { MakeAccount } from './component/MakeAccount';
import AccountInfo from './component/AccountInfo';
import Deposit from './component/Deposit';
import Withdraw from './component/Withdraw';
import AllAccountInfo from './component/AllAccountInfo';
import Join from './component/Join';
import Login from './component/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/makeAccount" element={<MakeAccount />} />
          <Route exact path="/accountInfo" element={<AccountInfo />} />
          <Route exact path="/deposit" element={<Deposit />} />
          <Route exact path="/withdraw" element={<Withdraw />} />
          <Route exact path="/allAccountInfo" element={<AllAccountInfo />} />
          <Route exact path="/join" element={<Join />} />
          <Route exact path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
