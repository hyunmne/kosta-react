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
                <li className="nav-item">계좌개설</li>
                <li className="nav-item">입금</li>
                <li className="nav-item">출금</li>
                <li className="nav-item">계좌조회</li>
                <li className="nav-item">전체계좌조회</li>
            </ul>
        </div>
    )
}

export default Header