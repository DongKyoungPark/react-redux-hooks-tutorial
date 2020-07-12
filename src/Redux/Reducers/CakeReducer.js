export const INCREASE_CAKE = 'INCREASE_CAKE';
export const DECREASE_CAKE = 'DECREASE_CAKE';

export const increaseCake = (number = 1) => ({ type: INCREASE_CAKE, payload: number });
export const decreaseCake = (number = 1) => ({ type: DECREASE_CAKE, payload: number });

const initialState = {
  numOfCakes: 10,
};

const cakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };

    case DECREASE_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
};

export default cakeReducer;
