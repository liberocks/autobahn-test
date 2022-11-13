import React from 'react';

const Component: React.FC = () => {
  return (
    <h1 className="text-3xl font-bold text-orange-600 underline">
      This is home page
    </h1>
  );
};

export const HomePage = React.memo(Component);
