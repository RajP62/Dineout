import { SIGNIN, SIGNUP } from "../actiontype/auth.action.type"

let initialstate = {
    signup:false,
    signin:false,
    token:null
}
export const authreducer = (state=initialstate,{type,payload})=>{
switch (type) {
    case  SIGNIN:{
return {...state,signin:!state.signin,signup:false}
    }
        
    case SIGNUP:{
return {...state,signup:!state.signup,signin:false}
    }
       


    default:{
return state
    }
        
    
}
}