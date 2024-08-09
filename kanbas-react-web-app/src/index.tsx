import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import App from './App';
import reportWebVitals from './reportWebVitals';

// document represents the DOM
// the DOM is used to decide what to render on the screen.
// the DOM is a tree structure of nodes.
// we can find the DOM in the browser's developer tools: elements tab.
// getElementById is a method to get a reference to an element in the DOM.
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// what App returned is rendered to the DOM.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
