import { BUY_SAMSUNG } from "./SamsungTypes";

const initialState = {
  numOfSamsung: 10,
};

const samsungReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_SAMSUNG:
      return {
        ...state,
        numOfSamsung: state.numOfSamsung - 1,
      };
    default:
      return state;
  }
};

export default samsungReducer;
