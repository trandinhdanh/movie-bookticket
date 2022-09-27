import { movieService } from "../../Services/movie.service";
import { GET_DETAIL_ROOM_TICKET } from "../constants/roomTicketDetailConstant";

export const getRoomTicketDetailActionService = (id) => {
  return (dispatch) => {
    movieService
      .getListRoomTicket(id)
      .then((res) => {
        dispatch({
            type : GET_DETAIL_ROOM_TICKET,
            payload: res.data.content,
        })
    })
      .catch((err) => {
        console.log(err);
      });
  };
};
