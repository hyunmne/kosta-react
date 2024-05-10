import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useEffect, useState } from 'react';

const Main = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        let loginUser = JSON.parse(sessionStorage.getItem("user"));
        // console.log(loginUser);
        loginUser && setUser({ ...loginUser });
    }, [])

    const logout = () => {
        sessionStorage.removeItem("user");
        setUser(null);
    }

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand href="/" className='mr-auto'><i><b>kosta.com</b></i></NavbarBrand>
            <NavbarToggler className='mr-auto' />
            <Nav navbar>
                {user !== null ?
                    (<>
                        <NavItem>
                            <NavLink href="/#"><b>{user.name}</b></NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink onClick={logout}>로그아웃</NavLink>
                        </NavItem>
                    </>
                    ) :
                    (<NavItem>
                        <NavLink href="/login">로그인</NavLink>
                    </NavItem>)
                }
                <NavItem>
                    <NavLink href="/join">회원가입</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="/">게시판</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default Main;