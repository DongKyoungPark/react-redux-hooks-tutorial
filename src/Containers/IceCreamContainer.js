import React, { memo, useState } from 'react';
import { connect } from 'react-redux';
import { increaseIceCream, decreaseIceCream } from '../Redux/Reducers/IceCreamReducer';

const IceCreamContainer = memo((props) => {
  const [number, setNumber] = useState(1);
  console.log(props);
  return (
    <>
      <h2>Number of IceCream = {props.numOfIceCreams}</h2>
      <input type='text' placeholder='숫자를 입력하세요' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <button onClick={() => props.increaseIceCream(number)}>increase {number} IceCream</button>
      <button onClick={() => props.decreaseIceCream(number)}>decrease {number} IceCream</button>
    </>
  );
});

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increaseIceCream: (number) => dispatch(increaseIceCream(number)),
    decreaseIceCream: (number) => dispatch(decreaseIceCream(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
