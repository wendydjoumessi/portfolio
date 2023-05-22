import React from 'react'; 
import ReactDom from 'react-dom';
import APP from './APP';
const root = ReactDom.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <APP/> 
  </React.StrictMode>

);