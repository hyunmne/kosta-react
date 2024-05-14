import Account from './Account';
import './App.css';
import {useAtom } from 'jotai';
import {countAtom} from './atoms';

// atom : 다른 컴포넌트에서도 쓸 수 있는 state 값
// useAtom : 데이터와 setter 둘 다 갖고 오고 싶으면
// useAtomValue : 데이터만 갖고 오고 싶으면
// useSetAtom : setter만 갖고 오고 싶으면 


function App() {
  const [count, setCount] = useAtom(countAtom); 
 
  return (
    <div className="App">
      {count} <br/>
      <Account/>
    </div>
  );
}

export default App;
