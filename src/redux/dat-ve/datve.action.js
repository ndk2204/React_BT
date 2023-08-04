import { DAT_GHE, HUY_GHE } from "./datve.const";

export const datGheCreator = (payload) => {
    return {
        type: DAT_GHE,
        payload,
    };      
};

export const huyGheCreator = (payload) => {
    return {
        type: HUY_GHE,
        payload,
    };      
};