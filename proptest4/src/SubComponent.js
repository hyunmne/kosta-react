import datatype from 'prop-types';

export const SubComponent = ({str, num, boolean, obj, arr,func}) => {
    console.log(arr)
    return(
        <div>
            <p>string props : {str}</p>
            <p>number props : {num}</p>
            <span>boolean props : {boolean.toString()}</span>
            <p>obj props : {JSON.stringify(obj)}</p>
            <p>arr props : {arr.toString()} </p>
            <p>func props : {func}</p>
        </div>
    )
}

SubComponent.propTypes = {
    str:datatype.string,
    num:datatype.number,
    boolean:datatype.bool,
    obj:datatype.object,
    arr:datatype.array,
    func:datatype.func
}