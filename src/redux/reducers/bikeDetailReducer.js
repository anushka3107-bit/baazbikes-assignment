import { ActionTypes } from "../constants/actionTypes";

const initalState = {
  bikes: [
    {
      id: 1,
      title: "xyfeuif",
      category: "ofheio",
    },
  ],
};

export const bikeDetailReducer = (state, { type, payload }) => {
  switch (type) {
    case ActionTypes.FETCH_DATA_REQUEST:
      return state;

    default:
      return state;
  }
};
