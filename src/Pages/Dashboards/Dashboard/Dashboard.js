import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";

export class Dashboard extends Component {
  render() {
    return (
      <div class="drawer drawer-mobile">
        <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
        <div class="drawer-content">
          <h1 className="text-3xl font-bold text-purple-500">
            Welcome to your Dashboard
          </h1>
          <Outlet />
        </div>
        <div class="drawer-side">
          <label for="dashboard-sidebar" class="drawer-overlay"></label>
          <ul class="menu p-4 overflow-y-auto w-45 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to={"/dashboard"}>My Appointments</Link>
            </li>
            <li>
              <Link to={"/dashboard/review"}>My Reviews</Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dashboard;
