import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { RoutePath } from '../../route';

const Component: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout navigate={navigate}>
      <h2 className="flex items-center pl-2 text-2xl font-semibold">
        <button className="mr-2" onClick={() => navigate(-1)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>
        Create new issue
      </h2>
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

          <div className="flex items-center justify-between">
            <button
              type="button"
              className="mt-2 flex min-w-[105px] cursor-pointer rounded-md py-2 px-16 font-semibold text-orange-500 hover:bg-gray-50 sm:pl-[5.5rem] sm:pr-24"
              onClick={() => navigate(-1)}
            >
              Cancel
            </button>
            <button
              type="button"
              className="mt-2 flex min-w-[105px] cursor-pointer rounded-md bg-orange-500 py-2 px-16 font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-600 active:bg-orange-800 sm:pl-[5.5rem] sm:pr-24"
              onClick={() => navigate(RoutePath.CREATE_ISSUE)}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const CreateIssuePage: React.FC = React.memo(Component);
