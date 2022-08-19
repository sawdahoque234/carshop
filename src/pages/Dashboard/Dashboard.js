import React from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "../../style/Footer.css";
const Dashboard = () => {
  const { pathname } = useLocation();
  return (
    <footer>
      <div className="h-[100vh]">
        <div class="drawer drawer-mobile">
          <div class="drawer-content px-2 lg:px-4 py-1">
            <div>
              <Outlet />
            </div>
          </div>
          <div class="dashboard-drawer ">
            <ul class="menu p-10 overflow-y-auto w-60 text-white ">
              <li
                className={`${pathname === "/" && "border-b-2 border-white "}`}
              >
                <Link to="/" className="my-4 text-xl font-medium">
                  Home
                </Link>
              </li>

              <>
                <li
                  className={`${
                    pathname === "/dashboard/myorder" &&
                    "border-b-2 border-white mt-6"
                  }`}
                >
                  <Link to="myorder" className="my-4 mt text-xl font-medium">
                    My order
                  </Link>
                </li>
              </>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Dashboard;
