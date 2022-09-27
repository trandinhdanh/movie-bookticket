import { OFF_LOADING, ON_LOADING } from "../constants/spinnerConstant"

const initialState = {
    isLoading : false,
}

export const spinnerReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ON_LOADING :{
        return {...state, isLoading : true}
    }
    case OFF_LOADING :{
        return {...state, isLoading : false}
    }

    default:
    return state
  }
}
