import logo from './logo.svg';
import './App.css';
import {Department} from './Department';

function App() {
  let department = [{id:10,name:'홍보부'},
                    {id:20,name:'개발부'},
                    {id:30,name:'영업부'}];
                    
  return (
    // <select name="department">
      <Department depts={department}/>
    // </select>
  );
}

export default App;
