import Student from "./Student";

// Student.js 에서 값을 3번 리턴해준다.. ? 먼소리노 

function Students(props){
    let pers = [...props.pers];
    return(
        <>
            <table border="1">
                <tr>
                    <th>이름</th><th>학년</th><th>학과</th>
                </tr>
                <tbody> 
                    {pers.map((per,index)=>{
                        return (<Student per={per} key={index} />)
                        // return (
                        //     <tr>
                        //     <td>{per.name}</td>
                        //     <td>{per.grade}</td>
                        //     <td>{per.subject}</td>
                        // </tr>
                        // )
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Students;
