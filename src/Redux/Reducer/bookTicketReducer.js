import { DAT_VE } from "../constants/bookTicketConstant"


const initialState = {
    danhSachGheDangDat : []
}

export const bookTicketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DAT_VE : {
        let dsGheCapNhat = [...state.danhSachGheDangDat]
        let index = dsGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.gheDuocChon.maGhe);
        if(index != -1){
            dsGheCapNhat.splice(index,1);

        }else{
            dsGheCapNhat.push(action.gheDuocChon)
        }
        
        return {...state,danhSachGheDangDat:dsGheCapNhat}
    }
  default:
    return state
  }
}
