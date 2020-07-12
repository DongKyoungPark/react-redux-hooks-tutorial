import React, { memo } from 'react';
import { connect } from 'react-redux';
import { increaseIceCream, decreaseIceCream } from '../Redux/Reducers/IceCreamReducer';
import { increaseCake, decreaseCake } from '../Redux/Reducers/CakeReducer';

const ItemContainer = memo((props) => {
  return (
    <div>
      <h2>Item = {props.item}</h2>
      <button onClick={props.increaseItem}>Increase Items</button>
      <button onClick={props.decreaseItem}>Decrease Items</button>
    </div>
  );
});

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes : state.iceCream.numOfIceCreams;

  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const IncreaseFunction = ownProps.cake ? () => dispatch(increaseCake()) : () => dispatch(increaseIceCream());
  const DecreaseFunction = ownProps.cake ? () => dispatch(decreaseCake()) : () => dispatch(decreaseIceCream());

  return {
    increaseItem: IncreaseFunction,
    decreaseItem: DecreaseFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
