import logo from './logo.svg';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Main from './component/Main';
import Header from './component/Header';
// import MakeAccount from './component/MakeAccount';
// import Deposit from './component/Deposit';
// import Withdraw from './component/withdraw';
// import AccountInfo from "./component/accountInfo";
// import AllAccountInfo from "./component/allAccountInfo";


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
          <Route exect path="/" element={<Main/>} />
          {/* <Route exect path="/makeAccount" element={<MakeAccount/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
