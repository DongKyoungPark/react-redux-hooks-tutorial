export const INCREASE_ICECREAM = 'INCREASE_ICECREAM';
export const DECREASE_ICECREAM = 'DECREASE_ICECREAM';

export const increaseIceCream = (number = 1) => ({ type: INCREASE_ICECREAM, payload: number });
export const decreaseIceCream = (number = 1) => ({ type: DECREASE_ICECREAM, payload: number });

const initialState = {
  numOfIceCreams: 20,
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams + action.payload,
      };

    case DECREASE_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - action.payload,
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
