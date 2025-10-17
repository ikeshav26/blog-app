import React, { useContext, useState,useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { FcGoogle } from 'react-icons/fc'; // Google icon
import { useEffectEvent } from 'react';

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { user, setuser, navigate } = useContext(AppContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = { email, password };

    try {
      const res = await axios.post("https://blog-app-te1y.onrender.com/api/user/login", formData, {
        withCredentials: true
      });

      if (res.status === 200 || res.status === 201) {
        toast.success(res.data.message || "Login successful!");
        setuser(true);
        navigate('/');
      } else {
        toast.error(res.data.message || "Login failed. Please check your credentials.");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
      setemail("");
      setPassword("");
    }
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
                disabled={loading}
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
                disabled={loading}
              />
            </div>

            <div className="flex items-center space-x-2">
              <input required type="checkbox" className="checkbox checkbox-primary" disabled={loading} />
              <label className="text-sm text-base-content/70">
                I agree to the <a href="#" className="text-primary underline">Terms</a> & <a href="#" className="text-primary underline">Privacy Policy</a>.
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* 🌐 Google Login Button */}
          <div className="mt-6">
            <div className="divider">or</div>
            <button
              onClick={()=>{ window.location.href=`${import.meta.env.VITE_API_URL}/auth/google`}}
              className="btn btn-outline w-full flex items-center justify-center space-x-2"
            >
              <FcGoogle className="text-2xl" />
              <span>Continue with Google</span>
            </button>
          </div>

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