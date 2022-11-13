import React from 'react';

const Component: React.FC = () => {
  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      This is authenticated home page
    </h1>
  );
};

export const AuthenticatedHomePage = React.memo(Component);
