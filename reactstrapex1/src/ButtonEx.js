import { Button, ButtonGroup } from 'reactstrap';
import { useState } from 'react';

const ButtonEx = () => {
    const [radioIdx, setRadioIdx] = useState(1);
    const [checkList, setCheckList] = useState([]);

    const radioClick = (e) => {
        setRadioIdx(+e.target.value);
    }

    const checkClick = (e) => {
        const selValue = +e.target.value;
        const idx = checkList.indexOf(selValue);  //특정 값이 몇번째 방에 있는지 가져옴, 없으면 음수
        if(idx < 0) {
            checkList.push(selValue);
        } else {
            checkList.splice(idx, 1);  //idx번째 데이터 1개 삭제
        }
        checkList.sort();
        setCheckList([...checkList]);
    }

    return(
        <>
            <Button color="primary" size="lg" active>Primary link</Button>{' '}
            <Button color="secondary" size="lg" active>Link</Button>

            <div>
                <h5>Radio Buttons</h5>
                <ButtonGroup>
                <Button color="primary" value="1" onClick={radioClick} active={radioIdx === 1}>One</Button>
                <Button color="primary" value="2" onClick={radioClick} active={radioIdx === 2}>Two</Button>
                <Button color="primary" value="3" onClick={radioClick} active={radioIdx === 3}>Three</Button>
                </ButtonGroup>
                <p>Selected: {radioIdx}</p>

                <h5>Checkbox Buttons</h5>
                <ButtonGroup>
                <Button color="primary" value="1" onClick={checkClick} active={checkList.includes(1)}>One</Button>
                <Button color="primary" value="2" onClick={checkClick} active={checkList.includes(2)}>Two</Button>
                <Button color="primary" value="3" onClick={checkClick} active={checkList.includes(3)}>Three</Button>
                </ButtonGroup>
                <p>Selected: {JSON.stringify(checkList)}</p>
            </div>
        </>
    )
}

export default ButtonEx;