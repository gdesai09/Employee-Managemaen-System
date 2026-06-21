import {
  Calendar1Icon,
  ChevronRightIcon,
  DollarSignIcon,
  FileTextIcon,
  LayoutGridIcon,
  LogOutIcon,
  MenuIcon,
  SettingsIcon,
  User,
  User2Icon,
  XIcon,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { dummyProfileData } from "../assets/assets";

const Sidebar = () => {
  const { pathname } = useLocation();

  const [username, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const role = "EMPLOYEE"; // or EMPLOYEE

  useEffect(() => {
    setUserName(`${dummyProfileData.firstName} ${dummyProfileData.lastName}`);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutGridIcon },

    ...(role === "ADMIN"
      ? [{ name: "Employee", href: "/employees", icon: User2Icon }]
      : [{ name: "Attendance", href: "/attendance", icon: Calendar1Icon }]),

    { name: "Leave", href: "/leave", icon: FileTextIcon },
    { name: "Payslip", href: "/payslips", icon: DollarSignIcon },
    { name: "Settings", href: "/settings", icon: SettingsIcon },
  ];

  const handelLogout = ()=>{
    window.location.href = "/login";
  }

  const sidebarContent = (
    <>
      {/* Header */}
      <div className="px-5 pt-6 border-b border-white/10 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <User className="text-white size-7" />

            <div>
              <p className="font-semibold text-white">Employee MS</p>

              <p className="text-xs text-slate-400">Management System</p>
            </div>
          </div>

          <button onClick={() => setMobileOpen(false)} className="lg:hidden">
            <XIcon size={20} />
          </button>
        </div>
      </div>

      {/* Profile */}
      {username && (
        <div className="mx-3 mt-2 p-3 rounded-lg border border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-center">
              <span className="font-semibold text-slate-300">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>

            <div>
              <p className="text-sm font-medium text-white mb-2">{username}</p>

              <p className="text-xs text-slate-400">
                {role === "ADMIN" ? "Administrator" : "Employee"}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Label */}
      <div className="px-4 mt-3 mb-2">
        <span className="text-xs text-slate-500 uppercase">Navigation</span>
      </div>

      {/* Menu */}
      <div className="flex-1 px-3 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname.startsWith(item.href);

          return (
            <Link
              key={item.href}
              to={item.href}
              className={`group flex items-center gap-2 px-3 py-2.5 rounded-lg transition-all relative text-decoration-none
              ${
                isActive
                  ? "bg-indigo-500/20 text-indigo-300"
                  : "text-slate-300 hover:bg-white/5 hover:text-white"
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-full bg-indigo-500" />
              )}

              <item.icon
                className={`w-5 h-5 ${
                  isActive ? "text-indigo-300" : "text-slate-400"
                }`}
              />

              <span className="flex-1">{item.name}</span>

              {isActive && <ChevronRightIcon className="w-4 h-4" />}
            </Link>
          );
        })}
      </div>
      {/* lougout */}
      <div className="p-3 border-t border-white/6">
        <button onClick={handelLogout} className="flex item-center gap-3 w-full px-3 py-2.5 rounded-md text-[13px] font-medium text-slate-400 hover:text-rose-400 hover:bg-rose-500/8 transition-all duration-150">
          <LogOutIcon className="w-[17px] h-[17px]"/>
          LogOut
        </button>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile Button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-slate-900 text-white"
      >
        <MenuIcon size={20} />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 h-screen bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white border-r border-white/10">
        {sidebarContent}
      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-72 z-50
        bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950
        text-white flex flex-col
        transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
