import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { RoutePath } from '../../route';

const Component: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout navigate={navigate}>
      <h2 className="pl-2 text-2xl font-semibold">Create new issue</h2>
      <h4 className="pl-2 text-base font-normal">
        An issue contains name, description, date, and score.
      </h4>

      <div className="mt-8 max-w-[500px] rounded-lg bg-white p-4 sm:p-6 xl:p-8">
        <div className="max-w-[500px]">
          <label className="block pb-1 text-base font-semibold text-gray-600">
            Name
          </label>
          <input
            type="text"
            className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-base"
            maxLength={32}
          />

          <label className="block pb-1 text-base font-semibold text-gray-600">
            Description
          </label>
          <textarea
            className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-base"
            maxLength={250}
          />

          <label className="block pb-1 text-base font-semibold text-gray-600">
            Score
          </label>
          <input
            type="number"
            max={100}
            min={0}
            className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-base"
          />

          <label className="block pb-1 text-base font-semibold text-gray-600">
            Date (optional)
          </label>
          <input
            type="date"
            className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-base"
          />

          <button
            type="button"
            className="mt-2 flex cursor-pointer rounded-md bg-rose-500 py-2 px-16 text-white hover:bg-rose-600 focus:outline-none focus:ring focus:ring-rose-600 active:bg-rose-800"
            onClick={() => navigate(RoutePath.CREATE_ISSUE)}
          >
            Create issue
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const CreateIssuePage: React.FC = React.memo(Component);
