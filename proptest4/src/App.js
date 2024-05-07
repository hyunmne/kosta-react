import logo from './logo.svg';
import './App.css';
import { SubComponent } from './SubComponent';
import { PropsNode } from './PropsNode';

// obj : 태그 안에 객체를 보낼 때 중괄호를 두 개 써야 함
// func : 실제 함수 
// javascript의 모든 타입의 변수를 넘길 수 있다 .. (?)
function App() {
  return (
    <div>
      {/* <SubComponent str="react" num={20} boolean={1==1} obj={{react:'리액트', exam:100}}
        arr={[10,20,30]} func={console.log('I am Function')} /> */}
        <PropsNode>
          <span>node from App.js</span>
        </PropsNode>
    </div>
  );
}

export default App;
