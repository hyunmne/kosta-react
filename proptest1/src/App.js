import logo from './logo.svg';
import './App.css';
import PropTest from './PropTest';
import Person from './Person';

function App() {
  let perInfo = {name:'song', age:30, nick:'송'};
  return (
    <div>
      <PropTest name='hong' age={30}/>
      <Person person={perInfo} /> 
    </div>
  );
}

export default App;

// data를 따로따로 넘길 수도 있지만, 객체로도 넘길 수 있다.