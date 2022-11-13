import React from 'react';

const Component: React.FC = () => (
  <h1 className="text-3xl font-bold underline text-red-600">
    This is create issue page
  </h1>
);

export const CreateIssuePage: React.FC = React.memo(Component);
