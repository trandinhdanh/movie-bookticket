import { GET_DETAIL_ROOM_TICKET } from "../constants/roomTicketDetailConstant"

const initialState = {
    roomTicketDetail: {}
}

export const roomTicketDetailReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_DETAIL_ROOM_TICKET : {
        state.roomTicketDetail = payload
        return {...state}
    }

  default:
    return state
  }
}
