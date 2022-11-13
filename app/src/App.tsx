import React from 'react';
import { RecoilRoot } from 'recoil';

import { RouterProvider } from 'react-router-dom';

import './App.css';
import { router } from './route';

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <RouterProvider router={router} />
    </RecoilRoot>
  );
};

export default App;
