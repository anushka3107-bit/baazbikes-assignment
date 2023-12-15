import { ActionTypes } from "../constants/actionTypes";

export const dataRequest = (details) =>{
    return{
        type:ActionTypes.FETCH_DATA_REQUEST,
        payload: details,
    }
};

export const dataSuccess = (details) =>{
    return{
        type:ActionTypes.FETCH_DATA_SUCCESS,
        payload: details,
    }
};

export const dataFailure = (details) =>{
    return{
        type:ActionTypes.FETCH_DATA_FAILURE,
        payload: details,
    }
};


