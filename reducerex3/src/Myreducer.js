export const initTodos = [
    {
        id:1,
        title:'Todo1',
        count:0,
        complate:false
    },
    {
        id:2,
        title:'Todo2',
        count:0,
        complate:true
    },
    {
        id:3,
        title:'Todo3',
        count:0,
        complate:true
    }
]

export const reducer = (state, action) => {
    switch(action.type) {
        case "COMPLETE" : 
            return state.map(todo=> {
                if(todo.id===action.id) {
                    return {...todo, complate:!todo.complate}
                } else return todo;
            })
        case "INCREMENT":
            return state.map(todo=>{
                if(todo.id===action.id){
                    return {...todo, count:todo.count+1}
                } else return todo;
            })
        default: return state;
    }
}