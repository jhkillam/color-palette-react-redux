import React from 'react';
import ReactDOM from 'react-dom';

import myStore from './store'
import './index.css';
import App from './App';

myStore.subscribe(() => ReactDOM.render(<App {...myStore.getState()}/>, document.getElementById('root')));

myStore.dispatch({ type: null });
