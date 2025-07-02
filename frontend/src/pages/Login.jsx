import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = {
      email,
      password
    };
    console.log(formData);
    setemail("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4">
      <div className="w-full max-w-4xl bg-base-200 shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left: Illustration */}
        <div className="hidden md:block bg-base-300 p-6">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="illustration"
            className="object-contain h-full"
          />
        </div>

        {/* Right: Form */}
        <div className="p-8 md:p-10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-primary mb-6">Welcome back to your BitBlog account</h2>
            <p className="text-sm text-base-content/70 mt-2">
              Don't have an account? <Link to='/signup' className="text-primary underline">Signup here</Link>
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-base-content">Email</label>
              <input
                value={email}
                onChange={(e) => setemail(e.target.value)}
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full"
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-base-content">Password</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="input input-bordered w-full"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input required type="checkbox" className="checkbox checkbox-primary" />
              <label className="text-sm text-base-content/70">
                I agree to the <a href="#" className="text-primary underline">Terms</a> & <a href="#" className="text-primary underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Login
            </button>
          </form>

          {/* Back to Home Link */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-primary hover:underline text-sm">
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
