import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increaseCake, decreaseCake } from '../Redux/Cake/CakeReducer';

const HooksCakeContainer = memo(() => {
  const numOfCake = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h2>Hooks Number of cakes = {numOfCake}</h2>
      <button onClick={() => dispatch(increaseCake())}>increase Cake</button>
      <button onClick={() => dispatch(decreaseCake())}>decrease Cake</button>
    </>
  );
});

export default HooksCakeContainer;
