import { ArrowRightIcon, Calendar, DollarSignIcon, FileTextIcon } from "lucide-react";
import { Link } from "react-router-dom";

const EmployeeDashboard = ( {data   }) => {

  const emp = data.employee;

  const cards = [
    {
      icon: Calendar,
      value: data.currentMonthAttendance,
      title: "Days present",
      subtitle: "This Month",
    },
    {
      icon: FileTextIcon,
      value: data.pendingLeaves,
      title: "Panding Leaves",
      subtitle: "Awating Approval",
    },
    {
      icon: DollarSignIcon,
      value: data.latestPayslip ? `$${data.latestPayslip.netSalary?.toLocaleString()}`: "N/A",
      title: "Latest PaySlip",
      subtitle: "most recent payout",
    },
  ];

  return (
    <div className="animate-fade-in">
      <div className="page-header">
        <h1 className="page-title"> Welcome, {emp?.firstName} </h1>
        <p className="page-subtitle">
          {emp?.position} - {emp?.department || "No Department"}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card card-hover p-3 sm:p-6 relative overflow-hidden group flex-row item-center justify-between"
          >
            <div>
              <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-slate-500/70 group-hover:bg-indigo-500/70" />
              <p className="text-sm font-medium text-slate-700">{card.title}</p>
              <p className="text-2xl fond-bold text-slate-900 mt-1">
                {card.value}
              </p>
            </div>
            <card.icon className="size-10 p-2.5 rounded-lg bg-slate-100 text-slate-600 group-hover:bg-indigo-50 group-hover:text-indigo-600 transition-color duration-200 mt-4" />
          </div>
        ))}
      </div>
      <Link
        to="/attendance"
        className="btn-primary text-center text-white  inline-flex item-center justofy center gap-5 text-decoration-none"
      >
        Mark Attendance <ArrowRightIcon className="h-4 w-4" />
      </Link>
      <Link
        to="/leave"
        className="btn-secondary text-center text-decoration-none text-black ml-5"
      >
        Apply For Leave
      </Link>
    </div>
  );
}

export default EmployeeDashboard