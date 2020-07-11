import React, { memo } from 'react';
import { connect } from 'react-redux';
import { increaseCake, decreaseCake } from '../Redux/Cake/CakeReducer';

const CakeContainer = memo((props) => {
  console.log(props);
  return (
    <>
      <h2>Number of cakes = {props.numOfCakes}</h2>
      <button onClick={props.increaseCake}>increase Cake</button>
      <button onClick={props.decreaseCake}>decrease Cake</button>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseCake: () => dispatch(increaseCake()),
    decreaseCake: () => dispatch(decreaseCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
