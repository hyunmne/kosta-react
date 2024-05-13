import { Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
// import { useEffect, useState } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { initState } from '../reducer';

const Main = () => {
    const user = useSelector(state=>state.persistedReducer.user);
    const dispatch = useDispatch();

    // useEffect(() => {
    //     let loginUser = JSON.parse(sessionStorage.getItem("user"));
    //     // console.log(loginUser);
    //     loginUser && setUser({ ...loginUser });
    // }, [])

    const logout = () => {
        dispatch({type:'user',payload:initState.user})
    }

    return (
        <Navbar color="info" light expand="md">
            <NavbarBrand href="/" className='mr-auto'><i><b>kosta.com</b></i></NavbarBrand>
            <NavbarToggler className='mr-auto' />
            <Nav navbar>
                {user.id!=='' ?
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