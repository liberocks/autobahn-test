import React from 'react';

const Component: React.FC = () => {
  return (
    <h1 className="text-3xl font-bold text-red-600 underline">
      This is issue page
    </h1>
  );
};

export const IssuePage: React.FC = React.memo(Component);
