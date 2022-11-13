import React from 'react';

export const AuthenticatedHomePage: React.FC = React.memo(() => {
  return (
    <h1 className="text-3xl font-bold underline text-red-600">
      This is authenticated home page
    </h1>
  );
});
