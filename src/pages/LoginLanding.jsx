import { ArrowRightIcon, ShieldIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";
import LoginLeftSide from "../components/LoginLeftSide";

const LoginLanding = () => {
  const portalOptions = [
    {
      to: "/login/admin",
      title: "Admin Login",
      description:
        "Manage employees, departments, payroll and system configuration.",
      icon: ShieldIcon,
    },
    {
      to: "/login/employee",
      title: "Employee Login",
      description:
        "View your profile, track attendance, request time off, and access payslips.",
      icon: UserIcon,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6 sm:p-12 lg:p-16 relative overflow-y-auto min-h-screen container bordered">
        <div className="w-full max-w-md relative z-10">
          {/* Heading */}
          <div className="mb-5">
            <h2 className="text-3xl font-bold text-slate-900">Welcome Back</h2>

            <p className="text-slate-500 mt-2">
              Select your portal to securely access the system
            </p>
          </div>

          {/* Portal Cards */}
          <div className="space-y-4">
            {portalOptions.map((portal) => {
              const Icon = portal.icon;

              return (
                <Link
                  key={portal.to}
                  to={portal.to}
                  className="block p-4 rounded-xl border border-slate-200 text-decoration-none shadow-sm hover:bg-indigo-100 hover:border-indigo-600 hover:shadow-xl hover:scale-105 transition-all duration-300 ">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-100 p-3 rounded-lg">
                        <Icon className="w-5 h-5 text-indigo-600" />
                      </div>

                      <div>
                        <h3 className="text-lg text-black font-semibold text-slate-900">
                          {portal.title}
                        </h3>

                        <p className="text-sm text-slate-500 text-secondary">
                          {portal.description}
                        </p>
                      </div>
                    </div>

                    <ArrowRightIcon className="w-5 h-5 text-slate-500" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* footer */}
          <div className="mt-3">
            <p className="text-secondary text-center">
              © {new Date().getFullYear()}. All rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLanding;
