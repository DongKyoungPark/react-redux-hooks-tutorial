import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { increaseCake, decreaseCake } from '../Redux/Reducers/CakeReducer';

const CakeContainer = memo((props) => {
  const [number, setNumber] = useState(1);
  console.log(props);
  return (
    <>
      <h2>Number of cakes = {props.numOfCakes}</h2>
      <input type='text' placeholder='숫자를 입력하세요' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <button onClick={() => props.increaseCake(number)}>increase {number} Cake</button>
      <button onClick={() => props.decreaseCake(number)}>decrease {number} Cake</button>
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
    increaseCake: (number) => dispatch(increaseCake(number)),
    decreaseCake: (number) => dispatch(decreaseCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
