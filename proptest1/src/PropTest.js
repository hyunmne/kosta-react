import React, {Component} from 'react';

// class PropTest extends Component{
//     render() {
//         let name = this.props.name;
//         let age = this.props.age;

//         return (
//             <div>
//                 <h1>{name}</h1>
//                 <h1>{age}</h1>
//             </div>
//         )
//     }
// }


// props = {name:'hong', age:30}
// let {name, age} = props
function PropTest({name, age}) { // props : 내장 객체 / 밖에 있는 태그가 안에 있는 태그에 데이터를 전달할 때 사용하는 매개체 
    return (
        <div>
            <h1>{name}</h1>
            <h1>{age}</h1>
        </div>
    )
}

export default PropTest;