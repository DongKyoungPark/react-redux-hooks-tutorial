import React, { memo } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CakeContainer from './Containers/CakeContainer';
import HooksCakeContainer from './Containers/HooksCakeContainer';
import IceCreamContainer from './Containers/IceCreamContainer';
import ItemContainer from './Containers/ItemContainer';
import UserContainer from './Containers/UserContainer';
import './App.css';

const App = memo(() => {
  return (
    <Provider store={store}>
      <div className='App'>
        <UserContainer />
        {/* <ItemContainer cake />
        <ItemContainer />
        <CakeContainer />
        <HooksCakeContainer />
        <hr />
        <IceCreamContainer /> */}
      </div>
    </Provider>
  );
});

export default App;
