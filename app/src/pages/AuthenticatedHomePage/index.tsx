import React from 'react';

const Component: React.FC = () => {
  return (
    <div>
      <div className="flex overflow-hidden">
        <nav className="visible fixed z-30 flex w-full items-center border-b border-gray-200 bg-white py-2 pr-4 lg:hidden">
          <img
            src="/logo.svg"
            alt="Autobahn security logo"
            className="flex w-32 items-center px-6"
          />
          <div>Dashboard</div>
          <div className="ml-4">New Issue</div>
          <div className="grow" />
          <div>Logout</div>
        </nav>
        <aside
          id="sidebar"
          className="fixed top-0 left-0 z-20 hidden hidden h-full w-64 shrink-0 lg:visible lg:flex"
          aria-label="Sidebar"
        >
          <div className="flex flex-1 flex-col space-y-1 bg-white py-4">
            <img
              src="/logo.svg"
              alt="Autobahn security logo"
              className="flex w-auto items-center px-6"
            />

            <div className="flex cursor-pointer items-center py-2 px-6 text-base font-normal text-gray-900 hover:bg-gray-100">
              Dashboard
            </div>

            <div className="flex cursor-pointer items-center py-2 px-6 text-base font-normal text-gray-900 hover:bg-gray-100">
              New Issue
            </div>

            <div className="grow" />

            <div className="flex cursor-pointer items-center py-2 px-6 text-base font-normal text-gray-900 transition duration-75 hover:bg-gray-100">
              Logout
            </div>
          </div>
        </aside>

        <div
          id="main-content"
          className="relative h-screen w-full overflow-y-auto bg-gray-100 pt-12 lg:ml-64 lg:pt-0"
        >
          <main className="pt-4 lg:pt-0">
            <div className="flex h-screen flex-col px-4 pt-4">
              <h2 className="pl-2 text-2xl">Cyber Fitness Dashboard</h2>

              <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-white p-4 sm:p-6 xl:p-8 ">
                  <h3 className="mb-10 text-xl font-bold leading-none text-gray-900">
                    System score
                  </h3>
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        2340
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        today
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg bg-white p-4 sm:p-6 xl:p-8 ">
                  <h3 className="mb-10 text-xl font-bold leading-none text-gray-900">
                    System score changes
                  </h3>
                  <div className="flex items-center">
                    <div className="shrink-0">
                      <span className="text-2xl font-bold leading-none text-gray-900 sm:text-3xl">
                        32.9%
                      </span>
                      <h3 className="text-base font-normal text-gray-500">
                        yesterday 2343
                      </h3>
                    </div>
                    <div className="ml-5 flex w-0 flex-1 items-center justify-end text-base font-bold ">
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
                      <svg
                        className="h-5 w-5 text-red-500"
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
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 grid grid-cols-1 xl:gap-4">
                <div className="mx-auto w-full pt-4">
                  <div className="rounded-lg bg-white p-6 ">
                    <div className="flex items-center justify-between">
                      <div>
                        <h2 className="text-xl font-bold leading-tight text-gray-800">
                          Issues
                        </h2>
                        <p className="mb-2 text-sm text-gray-600">
                          Latest issues score
                        </p>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center">
                          <div className="cursor-pointer text-base text-gray-700 underline underline-offset-4">
                            See all
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="relative my-8 min-h-[250px] md:min-h-[450px]">
                      <div className="mx-2 mb-2 flex items-end">
                        <div className="w-1/6 px-2">
                          <div
                            className="relative max-h-[250px] bg-blue-600 md:max-h-[450px]"
                            style={{ height: 450 }}
                          >
                            <div className="absolute inset-x-0 top-0 -mt-6 text-center text-sm text-gray-800">
                              1234
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="mx-auto border-t border-gray-400"></div>
                      <div className="-mx-2 flex items-end">
                        <div className="w-1/6 px-2">
                          <div className="relative bg-red-600">
                            <div className="absolute inset-x-0 top-0 mx-auto -mt-px h-2 w-[1px] bg-gray-400 text-center" />
                            <div className="absolute inset-x-0 top-0 mt-3 text-center text-sm text-gray-700">
                              Issue A
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <script async defer src="https://buttons.github.io/buttons.js"></script>
      <script src="https://demo.themesberg.com/windster/app.bundle.js"></script>
    </div>
  );
};

export const AuthenticatedHomePage = React.memo(Component);
