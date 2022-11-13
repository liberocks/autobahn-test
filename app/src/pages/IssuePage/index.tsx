import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Layout } from '../../components/Layout';
import { RoutePath } from '../../route';

import './issue.css';

const Component: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Layout navigate={navigate}>
      <div className="flex items-center pr-0">
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
          All issues
        </h2>
        <div className="grow" />
        <button
          type="button"
          className="ml-4 flex min-w-[105px] cursor-pointer rounded-md bg-orange-500 py-2 px-3 font-semibold text-white hover:bg-orange-600 focus:outline-none focus:ring focus:ring-orange-600 active:bg-orange-800"
          onClick={() => navigate(RoutePath.CREATE_ISSUE)}
        >
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
            className="mr-2 hidden w-5 sm:flex"
          >
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          New Issue
        </button>
      </div>

      <div className="mt-8 w-full rounded-md bg-white px-4 pb-4">
        <div className="mt-6 overflow-x-auto">
          <table className="w-full table-auto border-collapse">
            <thead>
              <tr
                className="rounded-lg text-left text-base font-medium text-gray-700"
                style={{ fontSize: '0.9674rem' }}
              >
                <th className="max-w-[100px] px-4 py-2">Name</th>
                <th className="hidden min-w-[300px] px-4 py-2 md:flex">
                  Description
                </th>
                <th className="max-w-[100px] px-4 py-2">Score</th>
                <th className="max-w-[100px] px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody className="text-base font-normal text-gray-700">
              <tr className="group border-b border-gray-200 py-10 hover:bg-gray-100">
                <td className="p-4">Intro to CSS</td>
                <td className="hidden p-4 md:flex">Adam</td>
                <td className="p-4">858</td>
                <td className="p-4">858</td>
              </tr>

              <tr className="border-b border-gray-200 py-4 hover:bg-gray-100">
                <td className="p-4">A Long and</td>
                <td className="hidden p-4 md:flex">Adam</td>
                <td className="p-4">112</td>
                <td className="p-4">858</td>
              </tr>
              <tr className="border-gray-200  hover:bg-gray-100">
                <td className="p-4">Intro to JavaScript</td>
                <td className="hidden p-4 md:flex">Chris</td>
                <td className="p-4">1,280</td>
                <td className="p-4">858</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div
          id="pagination"
          className="flex w-full items-center justify-end border-t border-gray-100 pt-4"
        >
          <button>
            <svg
              className="h-8 w-8"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.4">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 12C9 12.2652 9.10536 12.5196 9.29289 12.7071L13.2929 16.7072C13.6834 17.0977 14.3166 17.0977 14.7071 16.7072C15.0977 16.3167 15.0977 15.6835 14.7071 15.293L11.4142 12L14.7071 8.70712C15.0977 8.31659 15.0977 7.68343 14.7071 7.29289C14.3166 6.90237 13.6834 6.90237 13.2929 7.29289L9.29289 11.2929C9.10536 11.4804 9 11.7348 9 12Z"
                  fill="#2C2C2C"
                />
              </g>
            </svg>
          </button>

          <button className="mx-2 cursor-pointer text-base font-semibold leading-relaxed text-red-600 hover:text-red-600">
            1
          </button>
          <button className="mx-2 cursor-pointer text-base font-semibold leading-relaxed hover:text-red-600">
            2
          </button>
          <button className="mx-2 cursor-pointer text-base font-semibold leading-relaxed hover:text-red-600">
            3
          </button>
          <button className="mx-2 cursor-pointer text-base font-semibold leading-relaxed hover:text-red-600">
            4
          </button>

          <button>
            <svg
              className="h-8 w-8 text-red-500"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 12C15 11.7348 14.8946 11.4804 14.7071 11.2929L10.7071 7.2929C10.3166 6.9024 9.6834 6.9024 9.2929 7.2929C8.9024 7.6834 8.9024 8.3166 9.2929 8.7071L12.5858 12L9.2929 15.2929C8.9024 15.6834 8.9024 16.3166 9.2929 16.7071C9.6834 17.0976 10.3166 17.0976 10.7071 16.7071L14.7071 12.7071C14.8946 12.5196 15 12.2652 15 12Z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </div>
    </Layout>
  );
};

export const IssuePage: React.FC = React.memo(Component);
