import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { useState } from 'react';

const Header = () => {
    const [collapsed, setCollapsed] = useState(true);
    const navBackColor = {backgroundColor:"#ffef6b"};

    return(
        <div>
        <Navbar color="faded" style={collapsed===true?{backgroundColor:"#ffef6b"}:{backgroundColor:"#ffffff"}}>
          <NavbarBrand href="/" className="mr-auto"><i>toto<b>bank</b></i></NavbarBrand>
          <NavbarToggler onClick={()=>setCollapsed(!collapsed)} className="mr-2" />
          <Collapse isOpen={!collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/makeAccount">계좌개설</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/deposit">입금</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/withdraw">출금</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/accountInfo">계좌조회</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/allAccountInfo">전체계좌조회</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default Header;