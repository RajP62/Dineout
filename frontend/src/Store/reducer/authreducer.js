import { BOOK, SET_FILTER, SIGNIN, SIGNUP, SORT, STATUS ,GUEST,DATE, RESTAURANTDETAILS} from "../actiontype/auth.action.type"

let initialstate = {
    signup:false,
    signin:true,
    token:null,
    filters:{},
    sort:"",
    bookingDetails:{
        BookTime:"",
        Guest:0,
        Status:"",
        Date:"",

    },
    restaurantDetails:{
   name:"",
   address:""
    }
}
export const authreducer = (state=initialstate,{type,payload})=>{
switch (type) {
    case  SIGNIN:{
return {...state,signin:!state.signin,signup:false}
    }
        
    case SIGNUP:{
return {...state,signup:!state.signup,signin:false}
    }
       
    case SET_FILTER:{
        return {...state,filters:payload}
    }
case SORT:{
    return {...state,sort:payload}
}
case BOOK:{
    return {...state,bookingDetails:{...state.bookingDetails,BookTime:payload}}
}
case STATUS :{
    return {...state,bookingDetails:{...state.bookingDetails,Status:payload}} 
}

case GUEST :{
    return {...state,bookingDetails:{...state.bookingDetails,Guest:state.bookingDetails.Guest+payload}}  
}

case DATE :{
    return {...state,bookingDetails:{...state.bookingDetails,Date:payload}}
}

case RESTAURANTDETAILS :{
    return {...state,restaurantDetails:{...state.restaurantDetails,name:payload.name,adress:payload.adress}}
}
    default:{
return state
    }
        
    
}
}