import { CHINHSUA_SV, HOANTHIEN_SV, THEM_SV, XOA_SV } from "./formSV.const";

const stateDefault = {
  mangSinhVien: [
    { maSV: 1, hoTen: "Khanh", soDT: "0905", email: "ndk@gmail.com" },
    { maSV: 2, hoTen: "Hung", soDT: "0905", email: "ndk@gmail.com" },
    { maSV: 3, hoTen: "Tung", soDT: "0905", email: "ndk@gmail.com" },
  ],
  svChinhSua: null,
};

export const QuanLySinhVienReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case THEM_SV: {
      const mangSVUpdate = [...state.mangSinhVien, action.payload];
      state.mangSinhVien = mangSVUpdate;
      return { ...state };
    }
    case XOA_SV: {
      state.mangSinhVien = state.mangSinhVien.filter(
        (sv) => sv.maSV !== action.payload.maSV
      );
      return { ...state };
    }
    case CHINHSUA_SV: {
      state.svChinhSua = action.payload;
      return { ...state };
    }
    case HOANTHIEN_SV: {
      const index = state.mangSinhVien.findIndex(
        (i) => i.maSV === action.payload.maSV
      );
      if (index === -1) {
        return { ...state };
      }
      state.mangSinhVien[index] = action.payload;
      state.mangSinhVien = [...state.mangSinhVien];

      state.svChinhSua = null;
      return { ...state };

    }
    default: 
      return state;
    
  }
};
