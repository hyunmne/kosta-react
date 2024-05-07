import React,{Component} from 'react';

class StateCom extends Component {
    constructor(props){
        super(props);
        this.state = { // 상태관리, 형상관리 rerendering
            str:this.props.str,
            num:100
        }
    }

    strChange = (e) => {
        this.setState({str:'React'})
    }

    numChange = (e) => {
        this.setState({num:200})
    }

    // <> </> : 비어있는 태그, 프래그먼트 / 전체를 하나로 묶을 때 사용함
    // react 에서는 onClick 등 무조건 카멜 표기법 사용
    render() {
        return(
            <> 
                <div>
                    {this.state.str}:{this.state.num}
                    <button onClick={()=>this.setState({num:200})}>200</button>
                    <button onClick={()=>this.setState({str:"React"})}>React</button>
                </div>
            </>
        )
    }
}

export default StateCom;