import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import MyNubmer from './MyNumber';
import MyStr from './MyStr';
import MyObj from './MyObj';
import MyArr from './MyArr';

function App() {
  const [number, setNumber] = useState(10);
  const [str, setStr] = useState('stiven');
  const [obj, setObj] = useState({num:10, data:'stringdata'});
  const [arr, setArr] = useState([10,20,30]);
  
  return (
    <div className="App">
      <MyNubmer param={number} setParam={setNumber} />
      <MyStr param={str} setParam={setStr} />
      <MyObj param={obj} setParam={setObj} />
      <MyArr param={arr} setParam={setArr} />
    </div>
  );
}

export default App;
