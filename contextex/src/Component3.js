import Component4 from "./Component4";

const Component3 = ({user, setUser}) => {
    return(
        <>
            <h1>Component3</h1>
            <Component4 user={user}  setUser={setUser} />
        </>
    )
}

export default Component3;