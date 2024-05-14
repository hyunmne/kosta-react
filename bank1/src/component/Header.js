// import {Link} from 'react-router-dom';
import {useState} from 'react';
import {Navbar, NavbarToggler, NavbarBrand, Nav,
        NavItem, NavLink, UncontrolledDropdown, 
        DropdownToggle, DropdownMenu, DropdownItem} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import { initState } from '../reducer';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false); 
    const user = useSelector(state=>state.persistedReducer.user);
    const dispatch = useDispatch();

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const logout = () => {
        dispatch({type:'user', payload:initState.user})
    }

    return (
        <Navbar color='info' light expand="md">
            <NavbarBrand><i><b>코스타 은행</b></i></NavbarBrand>
            <NavbarToggler onClick={toggle}/>
            <Nav className="ml-auto" navbar>
                {user.id!=='' ?
                (<>
                    <NavItem>
                        <NavLink href="#"><b>{user.name}</b></NavLink>
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
                <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle tag="a" className="nav-link" caret>계좌</DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem tag="a" href="/">계좌개설</DropdownItem>
                        <DropdownItem tag="a" href="/deposit">입금</DropdownItem>
                        <DropdownItem tag="a" href="/withdraw">출금</DropdownItem>
                        <DropdownItem tag="a" href="/accountInfo">계좌조회</DropdownItem>
                        <DropdownItem tag="a" href="/allAccountInfo">전체계좌조회</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
        </Navbar>
        // <div style={divStyle}>
        //     <ul className="nav-items">
        //         <li className="nav-item"><i><b>코스타 은행</b></i></li>
        //         <li className="nav-item"><Link to="/">계좌개설</Link></li>
        //         <li className="nav-item"><Link to="/deposit">입금</Link></li>
        //         <li className="nav-item"><Link to="/withdraw">출금</Link></li>
        //         <li className="nav-item"><Link to="/accountInfo">계좌조회</Link></li>
        //         <li className="nav-item"><Link to="/allAccountInfo">전체계좌조회</Link></li>
        //         <li className="nav-item"><Link to="/join">회원가입</Link></li>
        //         <li className="nav-item"><Link to="/login">로그인</Link></li>
        //     </ul>
        // </div>
    )
}

export default Header