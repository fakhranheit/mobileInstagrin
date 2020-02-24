import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import reducers from './src/reducers'
import Appinit from './appinit'


const App= () => {
  return (
    <Provider store={createStore(reducers, {}, applyMiddleware(reduxThunk))}>
      <Appinit/>
    </Provider>
  );
};

export default App;
