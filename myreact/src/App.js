import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import YourComponent from './YourComponent';


function App() {
  return (
    // 리턴 할 땐 최종 하나의 컴포넌트(?) 여야 한다
    <div>
    <h1>Hello React!!</h1>
    <MyComponent />
    <YourComponent />
    </div>
  )
}




export default App;

