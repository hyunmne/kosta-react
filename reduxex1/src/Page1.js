import {useSelector, useDispatch} from 'react-redux';
import Page2 from './Page2';

const Page1 = () => {
    const data1= useSelector(state=>state.data1);
    const dispatch=useDispatch();

    return (
        <>
            <h1>{data1}</h1>
            <input type="text" onChange={(e)=>dispatch({type:'STRING',data:e.target.value})}/><br/>
            <Page2/>
        </>
    )
}

export default Page1;