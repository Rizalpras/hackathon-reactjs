import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './container/Home/Home';
import Product from './container/Product/Product';
import LifeCycleCop from '../../video8/src/container/LifeCycleComp/LifeCycleCop';

const root = ReactDOM.createRoot(document.getElementById('root')).render(<Home/>);

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
