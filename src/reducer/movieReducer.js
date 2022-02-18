const movieInitialState=[]

const movieReducer=(state=movieInitialState,action)=>{
    switch (action.type){
        case 'ADD_MOVIE':{
            return [...state,{...action.payload}]
        }
        case 'REMOVE_MOVIE':{
            return state.filter((ele)=>{
                return ele.id!==action.payload   //action.payload is current id
            })
        }
        default:{
            return[...state]
        }
    }
}
export default movieReducer