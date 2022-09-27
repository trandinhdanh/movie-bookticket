import { localStorageService } from "../../Services/localStorageService";
import { LOGIN } from "../constants/userConstant";


let initiState = {
    userInfo : localStorageService.user.get(),
}

export let userReducer = (state = initiState, action )  => { 

    switch(action.type){
        case LOGIN : {
            state.userInfo = action.payload;
            return {...state}
        }
        default:
            return state
    }
 }