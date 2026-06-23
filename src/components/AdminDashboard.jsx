import {
  Building2Icon,
  Calendar1Icon,
  FileTextIcon,
  UserIcon,
} from "lucide-react";

const AdminDashboard = ({ data }) => {
  const stats = [
    {
      icon: UserIcon,
      value: data.totalEmployees,
      label: "Total Employees",
      description: "Active workflow",
    },
    {
      icon: Building2Icon,
      value: data.totalDepartments,
      label: "Departments",
      description: "Organizational Units",
    },
    {
      icon: Calendar1Icon,
      value: data.todayAttendance,
      label: "Today's Attendance",
      description: "Checked in today",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      label: "Pending Leaves",
      description: "Awaiting Approval",
    },
  ];
  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title"> Dashboard</h1>
        <p className="page-subtitle">
          Welcome Back, Admin - here's your overview
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
        {stats.map((s) => (
          <div
            key={s.label}
            className="card card-hover p-3 sm:p-6 relative overflow-hidden group flex-row item-center justify-between"
          >
            <div>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70" />
              <p className="text-sm font-medium text-slate-700">{s.label}</p>
              <p className="text-2xl fond-bold text-slate-900 mt-1">
                {s.value}
              </p>
            </div>
            <s.icon className="size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-color duration-200 mt-4" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboard;
