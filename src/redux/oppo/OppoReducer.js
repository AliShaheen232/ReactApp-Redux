import { BUY_OPPO } from "./OppoTypes";
const initialState = {
  numOfOppo: 15,
};

const oppoReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_OPPO:
      return {
        ...state,
        numOfOppo: state.numOfOppo - 1,
      };
    default:
      return state;
  }
};
export default oppoReducer;
