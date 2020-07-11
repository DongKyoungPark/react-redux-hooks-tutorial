export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const increaseCake = () => ({ type: INCREASE });
export const decreaseCake = () => ({ type: DECREASE });

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + 1,
      };

    case DECREASE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };

    default:
      return state;
  }
};

export default cakeReducer;
