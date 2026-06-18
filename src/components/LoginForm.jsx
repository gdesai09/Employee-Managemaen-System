import { ArrowLeftIcon, EyeIcon, EyeOffIcon, Loader2Icon } from "lucide-react";
import LoginLeftSide from "./LoginLeftSide";
import { Link } from "react-router-dom";
import { useState } from "react";

const LoginForm = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    console.log(email,password);
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="container mt-5 p-5 sm:p-12">
        <div className="W-full max-w-md animate-fade-in">
          <Link
            to="/login"
            className="inline-flex gap-2 item-center text-decoration-none text-secondary text-sm mb-10"
          >
            <ArrowLeftIcon /> Back to Login
          </Link>
          <div className="mb-8">
            <h1 className="text-2xl sm:text-3xl font-medium text-zinc-800">
              {title}
            </h1>
            <p className="text-secondary">{subtitle}</p>
          </div>
          {error && (
            <div className="mb-10 p-4 bg-rose-50 border boeder-rose-200 text-rose-700 text-sm rounded-xl flex item-start gap-3">
              <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
              {error}
            </div>
          )}
          <div className="container bordered ">
            <form onSubmit={handelSubmit}>
              <div>
                <label>Email Address </label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <br />
              </div>
              <div>
                <label htmlFor="" className="mt-3">
                  Password
                </label>
                <div className="relative">
                  <input
                  type={showPassword ? "text" : "password"}
                  placeholder="*********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" className="absolute right-3 top-1.7 translate-y-1/2 text-slate-400 hover:text-slate-600 transition-color" onClick={()=>setShowPassword(!showPassword)}>
                   { showPassword? <EyeOffIcon/>:<EyeIcon/>}
                </button>
                </div>
              </div>

              <button className="btn btn-primary mt-3 form-control" disabled={loading}>
                {loading && <Loader2Icon className="animate-spin h-4 w-4 mr-2"/>}
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
