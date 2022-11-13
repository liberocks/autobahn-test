import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}
export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

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
          <main className="pt-4 lg:pt-0">{children}</main>
        </div>
      </div>
    </div>
  );
};
