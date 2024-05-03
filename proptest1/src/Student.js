function Student({per}) {
    return (
        <tr>
            <td>{per.name}</td>
            <td>{per.grade}</td>
            <td>{per.subject}</td>
        </tr>
    )
}

export default Student;