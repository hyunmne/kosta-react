import logo from './logo.svg';
import './App.css';
import {useState, useReducer} from 'react';

// reducer : state를 업데이트하는 역할. 즉 함수이다.
// action : 업데이트하고자 하는 내용
// dispatch : state 업데이트를 위한 요구(명령), reducer 함수 호출(parameter로 action을 가져감)

const reducer = (state, action) => {
  switch(action.type) {
    case 'deposit': return +state+(+action.payload);
    case 'withdraw': return +state-action.payload;
    default: return +state;
  }
}

function App() {
  const [money, setMoney] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0); // (reducer를 이용할 함수명, 초기 state 값)
  return (
    <div className="App">
      <h2>useReducer 은행</h2>
      <p>잔액 : {balance}</p>
      <input type="number" value={money} onInput={(e)=>setMoney(e.target.value)} step="1000" />
      <button onClick={()=>dispatch({type:'deposit',payload:money})}>입 금</button>
      <button onClick={()=>dispatch({type:'withdraw',payload:money})}>출 금</button>
    </div>
  );
}

export default App;
