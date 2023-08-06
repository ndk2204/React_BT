import { CHINHSUA_SV, HOANTHIEN_SV, THEM_SV, XOA_SV } from "./formSV.const";

export const themSVCreator = (payload) => {
  return {
    type: THEM_SV,
    payload,
  };
};

export const xoaSVCreator = (payload) => {
  return {
    type: XOA_SV,
    payload,
  };
}

export const chinhSuaSVCreator = (payload) => {
  return {
    type: CHINHSUA_SV,
    payload,
  };
}

export const hoanThienSVCreator = (payload) => {
  return {
    type: HOANTHIEN_SV,
    payload,
  };
}