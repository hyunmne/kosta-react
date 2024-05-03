import Students from "./Students";

function App2() {
    const pers = [{name:'hong', grade:1, subject:'computer'},
                  {name:'song', grade:2, subject:'sports'}];

    return (
        <div>
            <Students pers={pers} />
        </div>
    )
}

export default App2;