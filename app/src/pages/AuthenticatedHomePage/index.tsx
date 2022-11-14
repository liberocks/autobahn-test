import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import issue from '../../store/query/issue';
import { Layout } from '../../components/Layout';
import { RoutePath } from '../../route';
import { useRecoilValue } from 'recoil';
import { accessTokenAtom } from '../../store/atom/accessToken.atom';
import { Issue, IssuesStatistics } from '../../store/model/issue';
import { colorScale } from '../../common/colorScale';
import { ShowIf } from '../../components/ShowIf';

const Component: React.FC = () => {
  const navigate = useNavigate();
  const accessToken = useRecoilValue(accessTokenAtom);

  const { data: issuesStatisticsData } = useQuery({
    queryKey: ['getIssuesStatistics'],
    queryFn: async () => {
      const res = await issue.getIssuesStatistics(
        {
          // created_at_start_date: moment()
          //   .subtract(1, 'day')
          //   .startOf('day')
          //   .format('YYYY-MM-DD'),
          // created_at_end_date: moment().endOf('day').format('YYYY-MM-DD'),
        },
        accessToken,
      );
      return res;
    },
  });

  const { data: issuesData } = useQuery({
    queryKey: ['getIssues'],
    queryFn: async () => {
      const res = await issue.getIssues(
        {
          page_size: 6,
          created_at_start_date: moment()
            .subtract(1, 'day')
            .startOf('day')
            .format('YYYY-MM-DD'),
          created_at_end_date: moment().endOf('day').format('YYYY-MM-DD'),
        },
        accessToken,
      );
      return res;
    },
  });

  const issues = (issuesData?.data || []) as Issue[];
  const issuesStatistics = (issuesStatisticsData || []) as IssuesStatistics[];

  console.log('DEBUG issuesStatistics', issuesStatisticsData);

  console.log(
    'DEBUG todayIssuesStatistic',
    issuesStatistics.find((issuesStatistic) =>
      moment(issuesStatistic.date).isSame(moment(), 'day'),
    ),
  );
  const todayIssuesStatistic = issuesStatistics.find((issuesStatistic) =>
    moment(issuesStatistic.date).isSame(moment(), 'day'),
  );
  const yesterdayIssuesStatistic = issuesStatistics.find((issuesStatistic) =>
    moment(issuesStatistic.date).isSame(moment().subtract(1, 'day'), 'day'),
  );

  const todayScore = todayIssuesStatistic?.total_score || 0;
  const yesterdayScore = yesterdayIssuesStatistic?.total_score || 0;

  return (
    <Layout navigate={navigate}>
      <div className="flex items-center pr-0">
        <h2 className="pl-2 text-2xl font-semibold">Cyber Fitness Dashboard</h2>
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

      <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl bg-white p-4 sm:p-6 xl:p-8 ">
          <h3 className="mb-10 text-2xl font-bold leading-none text-gray-900">
            System score
          </h3>
          <div className="flex items-center">
            <div className="shrink-0">
              <span className="text-3xl font-bold leading-none text-gray-900 sm:text-3xl">
                {todayScore}
              </span>
              <h3 className="text-base font-normal text-gray-500">
                today ({todayIssuesStatistic?.total_count || 0} issues)
              </h3>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white p-4 sm:p-6 xl:p-8 ">
          <h3 className="mb-10 text-2xl font-bold leading-none text-gray-900">
            System score changes
          </h3>
          <div className="flex items-center">
            <div className="shrink-0">
              <span className="text-3xl font-bold leading-none text-gray-900 sm:text-3xl">
                {((todayScore - yesterdayScore) / (yesterdayScore || 1)) *
                  100.0}
                %
              </span>
              <h3 className="text-base font-normal text-gray-500">
                yesterday score {yesterdayScore}
              </h3>
            </div>
            <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold ">
              <ShowIf condition={todayScore > yesterdayScore}>
                <svg
                  className="h-5 w-5 text-green-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </ShowIf>
              <ShowIf condition={todayScore < yesterdayScore}>
                <svg
                  className="h-5 w-5 text-orange-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M14.707 12.293a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l2.293-2.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </ShowIf>
              <ShowIf condition={todayScore === yesterdayScore}>
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
                  className="h-5 w-5 text-gray-500"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </ShowIf>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-4 grid grid-cols-1 xl:gap-4">
        <div className="mx-auto w-full pt-4">
          <div className="rounded-xl bg-white p-6 ">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold leading-tight text-gray-800">
                  Issues
                </h2>
                <p className="mb-2 text-base text-gray-600">
                  Recent issues score
                </p>
              </div>

              <div className="mb-4">
                <div className="flex items-center">
                  <button
                    type="button"
                    className="cursor-pointer text-base text-gray-700 underline underline-offset-4"
                    onClick={() => navigate(RoutePath.ISSUE)}
                  >
                    See all
                  </button>
                </div>
              </div>
            </div>

            <ShowIf condition={issues.length === 0}>
              <div className="text-gray-500">No issues recently</div>
            </ShowIf>
            <ShowIf condition={issues.length > 0}>
              <div className="relative my-8 min-h-[450px]">
                <div className="mx-2 mb-2 flex items-end">
                  {issues.map((issue) => {
                    const color = colorScale(issue.score, 0, 100);
                    return (
                      <div
                        className="w-1/6 px-2"
                        key={`issue-score-${issue.id}`}
                      >
                        <div
                          className="relative max-h-[450px]"
                          style={{
                            height: (issue.score / 100) * 450,
                            background: `linear-gradient(0deg, ${color}55 0%, ${color} 100%)`,
                          }}
                        >
                          <div className="absolute inset-x-0 top-0 -mt-6 text-center text-sm text-gray-800">
                            {issue.score}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mx-auto border-t border-gray-400" />
                <div className="-mx-2 flex items-end">
                  {issues.map((issue) => {
                    return (
                      <div className="w-1/6 px-2" key={`issue-bar-${issue.id}`}>
                        <div className="relative bg-orange-600">
                          <div className="absolute inset-x-0 top-0 mx-auto -mt-px h-2 w-[1px] bg-gray-400 text-center" />
                          <div className="absolute inset-x-0 top-0 mt-3 text-center text-sm text-gray-700">
                            {issue.name}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </ShowIf>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const AuthenticatedHomePage = React.memo(Component);
