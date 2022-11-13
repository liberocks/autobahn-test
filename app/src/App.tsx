import React from "react";
import { RecoilRoot } from "recoil";

import "./App.css";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <h1 className="text-3xl font-bold underline text-red-600">
        Simple React Typescript Tailwind Sample
      </h1>
    </RecoilRoot>
  );
};

export default App;
