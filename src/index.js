import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer, {initialState} from './components/Reducer';
import { StateProvider } from './components/StateProvider';

ReactDOM.render(
  <React.StrictMode>
  <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

//By above code we giving access of Data Layer to every single components
//By use of Datalayer if we push information we can also pull that info.....