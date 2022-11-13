import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components/Layout';

const Component: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout navigate={navigate}>
      <h1 className="text-3xl font-bold text-rose-600 underline">
        This is issue page
      </h1>
    </Layout>
  );
};

export const IssuePage: React.FC = React.memo(Component);
