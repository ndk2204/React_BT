import { DAT_GHE, HUY_GHE } from "./datve.const";

export const STATE_DEFAULT = {
    danhSachGheDangDat: [
        //soGhe
    ]
}

export const DatVeReducer = (state = STATE_DEFAULT, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.payload.soGhe);

            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {
                danhSachGheDangDatUpdate.push(action.payload)
            }

            state.danhSachGheDangDat = danhSachGheDangDatUpdate;
            return { ...state }
        }
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat => gheDangDat.soGhe === action.payload.soGhe);

            if (index !== -1) {
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            state.danhSachGheDangDat = danhSachGheDangDatUpdate;

            return { ...state }
        }

        default:
            return state;


    }
}