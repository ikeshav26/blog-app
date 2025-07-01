import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setemail] = useState("")
  const [password, setPassword] = useState("");

  const submitHandler=(e)=>{
    e.preventDefault()

    const formData={
      email,
      password
    }
    console.log(formData);
    setemail("")
    setPassword("")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-900 text-white px-4">
      <div className="w-full max-w-4xl bg-neutral-800 shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2">
        
        {/* Left: Form */}
        <div className="hidden md:block bg-neutral-900 p-6">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="illustration"
            className="object-contain h-full"
          />
        </div>

        {/* Right: Illustration */}
        
        <div className="p-8 md:p-10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-emerald-400 mb-6">Welcome back to your BitBlog account</h2>
            <p className="text-sm text-neutral-400 mt-2">
              Doesn't have an account? <Link to='/signup' className="text-emerald-400 underline">Signup here</Link>
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block text-sm mb-1">Email</label>
              <input
              value={email}
                onChange={(e)=>setemail(e.target.value)}
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div>
              <label className="block text-sm mb-1">Password</label>
              <input
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
            </div>

            <div className="flex items-center space-x-2">
              <input required type="checkbox" className="form-checkbox text-emerald-500 bg-neutral-800 border-neutral-600" />
              <label className="text-sm text-neutral-300">
                I agree to the <a href="#" className="text-emerald-400 underline">Terms</a> & <a href="#" className="text-emerald-400 underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-2 rounded-md transition"
            >
              Login
            </button>


          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
