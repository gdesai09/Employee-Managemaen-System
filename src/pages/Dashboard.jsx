import { useEffect, useState } from "react";

import { dummyEmployeeDashboardData } from "../assets/assets";
import EmployeeDashboard from "../components/EmployeeDashboard";
import Loading from "../components/Loading";

const Dashboard = () => {
    
  const [data, setData] =useState(null);
  const [loading , setLoading] = useState(true);

  useEffect(()=>{
    setData(dummyEmployeeDashboardData)

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  },[])

  if(loading) return <Loading/>
  if(!data) return <p className="text-center text-slate-500 py-12">Fail to load Data</p>

  if(data.role ==="ADMIN"){
    return <div>Admin Dashboard</div>
  }
  else{
    return <EmployeeDashboard data={data}/>
  }

  return (
    <h1>Dashboard</h1>
  );
};

export default Dashboard;