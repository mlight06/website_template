import React from 'react';
import {createRoot} from 'react-dom/client';
import HomePage from '../../src/HomePage';

// const element = {
//   <BrowserRouter>
// }
function App () {
  return (
    <div>
      Hello World
    </div>
  )
}
const root = createRoot(document.getElementById('root'));
root.render(

  <App />
    // <HomePage />

);
