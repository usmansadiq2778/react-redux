import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './style.css';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './redux store/store';
// import * as serviceworker from './'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
    //  </React.StrictMode>
);

reportWebVitals();
