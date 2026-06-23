import { useEffect, useState } from "react";

import { dummyAdminDashboardData } from "../assets/assets";
import EmployeeDashboard from "../components/EmployeeDashboard";
import Loading from "../components/Loading";
import AdminDashboard from "../components/AdminDashboard";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setData(dummyAdminDashboardData);

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Loading />;
  if (!data)
    return (
      <p className="text-center text-slate-500 py-12">Fail to load Data</p>
    );

  if (data.role === "ADMIN") {
    return <AdminDashboard data={data} />;
  } else {
    return <EmployeeDashboard data={data} />;
  }

  return <h1>Dashboard</h1>;
};

export default Dashboard;
