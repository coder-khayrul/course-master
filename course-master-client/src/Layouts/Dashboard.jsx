import React, { use, useState } from "react";
import { Outlet } from "react-router";
import { AuthContext } from "../Context/AuthContext";
import { AppSidebar } from "../components/Sidebar";
import { LuMenu } from "react-icons/lu";

export function Dashboard() {
  const { user } = use(AuthContext);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  if (!user) {
    return <div className="p-6">Please log in to access dashboard</div>;
  }

  return (
    <div className="min-h-screen flex bg-base-200">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden
          ${sidebarOpen ? "w-64" : "w-0"}`}
      >
        <AppSidebar />
      </div>

      {/* Main Area */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 flex items-center justify-between border-b bg-base-100 px-6">
          {/* Toggle Button */}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="btn btn-ghost btn-square"
          >
            <LuMenu className="h-6 w-6 text-second"/>
          </button>

          {/* User Info */}
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              {user.avatar ? (
                <div className="w-10 rounded-full">
                  <img src={user.avatar} alt={user.displayName} />
                </div>
              ) : (
                <div className="bg-indigo-500 text-white rounded-full w-10 grid place-items-center">
                  <span className="text-sm font-medium">
                    {user.displayName
                      ?.split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              )}
            </div>
            <p className="text-lg font-medium text-black">
              {user.displayName}
            </p>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
