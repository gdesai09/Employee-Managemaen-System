import { useState } from "react";
import LoginLeftSide from "./LoginLeftSide";

const RegisterForm = () => {
  const [ename, setEname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    console.log({
      ename,
      email,
      password,
    });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <LoginLeftSide />

      <div className="flex justify-center items-center flex-1 p-4">
        <div className="w-full max-w-sm border border-gray-300 rounded-lg shadow-md p-5 bg-white">
          <h3 className="text-center mb-4 text-secondary">Register</h3>

          <form>
            <div className="mb-3">
              <label className="form-label">Employee Name</label>
              <input
                type="text"
                value={ename}
                onChange={(e) => setEname(e.target.value)}
                placeholder="Enter employee name"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="form-control"
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;