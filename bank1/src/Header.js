import {Link} from 'react-router-dom';

const Header = () => {
    const divStyle = {
        backgroundColor : '#ebe3b7',
        width:'100%',
        position:'fixed',
        left:'0px',
        top:'0px',
        zIndex:10
    };

    return (
        <div style={divStyle}>
            <ul className="nav-items">
                <li className="nav-item"><i><b>코스타 은행</b></i></li>
                <li className="nav-item"><Link to="/">계좌개설</Link></li>
                <li className="nav-item"><Link to="/deposit">입금</Link></li>
                <li className="nav-item"><Link to="/withdraw">출금</Link></li>
                <li className="nav-item"><Link to="/accountInfo">계좌조회</Link></li>
                <li className="nav-item"><Link to="/allAccountInfo">전체계좌조회</Link></li>
            </ul>
        </div>
    )
}

export default Header