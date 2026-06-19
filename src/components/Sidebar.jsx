import { MenuIcon, User, User2, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { dummyProfileData } from "../assets/assets";

const Sidebar = () => {
  const { pathname } = useLocation();
  const [username, setUserName] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  const role =""||"EMPLOYEE";

  const sidebarContent = (
    <>
      {/* Brand Header */}
      <div className="px-5 pt-6 border-b border-white/6">
        <div className="flex item-center justify-between">
          <div className="flex item-center gap-3">
              <User className="text-white size-7" />
              <div>
                <p className="font-semibold text-[13px] text-white tracking-wide">
                  Employee MS
                </p>
                <p className="text-[11px] text-slate-500 font-medium">
                  Management System
                </p>
              </div>
          </div>
          <button onClick={()=>setMobileOpen(false)} className="lg:hidden text-slate-500 hover:text-black p-1">
            {/* close mobile menu */}
            <XIcon size={20}/>
          </button>
        </div>
      </div>
      {/* user profile card */}
      {username &&(
        <div className="mx-3 mt-4 mb-1 p-3 rounded-lg bg-white/3 border border-white/4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-slate-800 flex items-center justify-content ring-1 ring-white/10 shrink-0">
              <span className="p-3 text-sx font-semibold text-black">
                {username.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <p>{username}</p>
              <p>{role=== "ADMIN"?"Administrator":"Employee"}</p>
            </div>
          </div>
        </div>
      )}

      {/* navigation lables */}

      {/* navigation  */}

      {/* logout */}
    </>
  );

  useEffect(() => {
    setUserName(dummyProfileData.firstName + " " + dummyProfileData.lastName);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* mobile hamberger button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 border-slate-900 text-white rounded-lg shadow-lg border border-white/10"
      >
        <MenuIcon size={20} />
      </button>

      {/* mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* sidebar- desktop */}
      <aside className="hidden lg:flex flex-col h-full w-64 bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white shrink-0 border-r border-white/4">
        {sidebarContent}
      </aside>

      {/* sidebar- mobile */}
      <aside
        className={`lg:hidden fixed inset-y-0 left-0 w-72 bg-liner-to-b from-slate-900 via-slate-900 to-slate-950 text-white z-50 flex flex-col transform transition-transform duration-300 {mobileOpen?"transition-x-0":"transition-x-full"}`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;
