// import React,{Component} from 'react';

// class Subject extends Component {
//     render() { // 클래스형에만 존재함 (function엔 없음)
//         let subjects = [...this.props.subjects];
//         return (
//             subjects.map(subject=>(
//                 <option key={subject.key} value={subject.key}>{subject.text}</option>
//             ))
//         )
//     }
// }

const Subject = ({subjects}) => {
    // let subjects = [...subjects];
    return (
        subjects.map(subject=>(
            <option key={subject.key} value={subject.key}>{subject.text}</option>
        ))
    )
}

export default Subject;