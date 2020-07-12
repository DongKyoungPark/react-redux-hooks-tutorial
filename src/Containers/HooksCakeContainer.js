import React, { memo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCake, decreaseCake } from '../Redux/Reducers/CakeReducer';

const HooksCakeContainer = memo(() => {
  const [number, setNumber] = useState(1);
  const numOfCake = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Hooks Number of cakes = {numOfCake}</h2>
      <input type='text' placeholder='숫자를 입력하세요' value={number} onChange={(e) => setNumber(Number(e.target.value))} />
      <button onClick={() => dispatch(increaseCake(number))}>increase {number} Cake</button>
      <button onClick={() => dispatch(decreaseCake(number))}>decrease {number} Cake</button>
    </>
  );
});

export default HooksCakeContainer;
