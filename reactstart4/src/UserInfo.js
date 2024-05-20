import {useAtomValue} from 'jotai';
import {userAtom} from "./atoms"


const UserInfo = () => {
    const user = useAtomValue(userAtom);

    return (
        <div>
            <table border="1">
                <tbody>
                    <tr>
                        <td>이름</td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td>전화번호</td>
                        <td>{user.tel}</td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>주소</td>
                        <td>{user.address}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default UserInfo;