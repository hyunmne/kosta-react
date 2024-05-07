import logo from './logo.svg';
import './App.css';
import Subject from './Subject';

function App() {
  const subjects = [{key:'js', text:'javascript'},
                    {key:'java', text:'JAVA'},
                    {key:'jq', text:'JQuery'},
                    {key:'hs', text:'HTML/CSS'}  ,
                    {key:'spring', text:'Spring Framework'}];

  return (
    <select name="subject">
      <Subject subjects = {subjects}/>
    </select>
  );
}

export default App;
