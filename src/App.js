import React, { memo } from 'react';
import { Provider } from 'react-redux';
import store from './Redux/store';
import CakeContainer from './Containers/CakeContainer';
import HooksCakeContainer from './Containers/HooksCakeContainer';
import './App.css';

const App = memo(() => {
  return (
    <Provider store={store}>
      <div className='App'>
        <CakeContainer />
        <HooksCakeContainer />
      </div>
    </Provider>
  );
});

export default App;
