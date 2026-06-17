import { ArrowLeftIcon } from "lucide-react";
import LoginLeftSide from "./LoginLeftSide";
import { Link } from "react-router-dom";
import { useState } from "react";


const LoginForm = ({role, title, subtitle}) => {

  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="container mt-5 p-5 sm:p-12">
        <div className="W-full max-w-md animate-fade-in">
        <Link to="/login" className="inline-flex gap-2 item-center text-decoration-none text-secondary text-sm mb-10">
         <ArrowLeftIcon/> Back to Login
        </Link>
         <div className="mb-8">
         <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">{title}</h1>
         <p className="text-secondary">{subtitle}</p>
         </div>
      </div>
      </div>
    </div>
  );
};

export default LoginForm;
