import Component3 from "./Component3";

const Component2 = ({user, setUser}) => {
    return(
        <>
            <h1>Component2</h1>
            <Component3 user={user} setUser={setUser} />
        </>
    )
}

export default Component2;