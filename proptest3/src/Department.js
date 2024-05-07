// import React,{Component} from 'react';

// class Department extends Component {
//     render() {
//         let depts= [...this.props.depts];
//         return (
//             depts.map(dept => (
//                 <option key={dept.id} value={dept.id}>{dept.name}</option>
//         ))                
//     )
//     }
// }

export const Department = ({depts}) => {
    return (
        <select name="department">
            {
                depts.map(dept=>(
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))
            }
        </select>
    )
}

// export default Department;