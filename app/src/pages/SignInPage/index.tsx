import React from 'react';
import { useNavigate } from 'react-router-dom';

import { RoutePath } from '../../route';

const Component: React.FC = () => {
  const navigate = useNavigate();

  const handleSignIn = () => {
    // TODO: Sign in workflow

    navigate(RoutePath.HOME);
  };

  return (
    <div className="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
      <div className="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
        <div className="w-full rounded-lg bg-white">
          <div className="px-5 py-7">
            <h1 className="mb-5 text-left text-3xl font-bold">
              Autobahn Security
            </h1>
            <label className="block pb-1 text-base font-semibold text-gray-600">
              Email
            </label>
            <input
              type="text"
              className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-base"
              placeholder="Input your email"
            />
            <label className="block pb-1 text-base font-semibold text-gray-600">
              Password
            </label>
            <input
              type="text"
              className="mt-1 mb-5 w-full rounded-lg border px-3 py-2 text-base"
              placeholder="Input your password"
            />
            <button
              type="button"
              className="inline-block w-full rounded-lg bg-rose-500 py-2.5 text-center text-base font-semibold text-white shadow-sm transition duration-200 hover:bg-rose-600 hover:shadow-md focus:bg-rose-700 focus:shadow-sm focus:ring-2 focus:ring-rose-500/50"
              onClick={handleSignIn}
            >
              <span className="mr-2 inline-block">Login</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="inline-block h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const SignInPage = React.memo(Component);
