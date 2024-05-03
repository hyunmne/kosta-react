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

function PropTest(props) { // props : 내장 객체 
    return (
        <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
        </div>
    )
}

export default PropTest;