import {createStore} from 'redux'


//initial state
const initialState = {
name:'',
address:'',
city:'',
state:'',
zip:'',
img:'',
rentAmount:'',
mortgage:''
}



//action constant
export const UPDATE_NAME ='UPDATE_NAME'
export const UPDATE_ADDRESS ='UPDATE_ADDRESS'



//reducer
function reducer(state=initialState,action){
    switch(action.type){
        case UPDATE_NAME:
            return{...state,name:payload}
    }
}

//export default store
export default createStore(reducer)