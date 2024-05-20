import './App.css';
import {Routes, Route} from 'react-router-dom';
import SearchUser from './SearchUser';
import UserInfo from './UserInfo';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<SearchUser/>} />
        <Route exact path="/userInfo" element={<UserInfo/>} />
      </Routes>
    </div>
  );
}

export default App;
