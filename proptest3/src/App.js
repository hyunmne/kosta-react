import logo from './logo.svg';
import './App.css';
import {Department} from './Department';
import {Employee} from './Employee';

function App() {
  let employee = [{id:100,name:'홍길동',dept:10},
                  {id:200,name:'김길동',dept:20},
                  {id:300,name:'고길동',dept:30}];

  let department = [{id:10,name:'홍보부'},
                    {id:20,name:'개발부'},
                    {id:30,name:'영업부'}];
                    
  return (
    // <select name="department">
    <div>
      <Department depts={department}/>
      <Employee emps = {employee}/>
    </div>
    // </select>
  );
}

export default App;
