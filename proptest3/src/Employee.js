export const Employee = ({emps}) => {
    return(
        <table border='1'>
            <tbody>
                <tr>
                    <th>사번</th>
                    <th>이름</th>
                    <th>부서번호</th>
                </tr>
                {
                    emps.map(emp=> {
                        return (
                            <tr key={emp.id}>
                                <td>{emp.id}</td>
                                <td>{emp.name}</td>
                                <td>{emp.dept}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}