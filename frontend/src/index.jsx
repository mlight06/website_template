import React from 'react';
import { createRoot } from 'react-dom/cjs/react-dom.production.min';

import HomePage from './HomePage';

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
