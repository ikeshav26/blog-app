import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AppContext } from "../context/AppContext";
import { toast } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc"; 

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setusername] = useState("");
  const [loading, setLoading] = useState(false); // New loading state
  const { navigate, user, setuser } = useContext(AppContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = { email, username, password };

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/user/signup`,
        formData,
        {
          withCredentials: true,
        }
      );

      if (res.status === 201 || res.status === 200) {
        toast.success(res.data.message || "Account created successfully!");
        setuser(true);
        navigate("/");
      } else {
        toast.error(res.data.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setLoading(false);
      setemail("");
      setPassword("");
      setusername("");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100 text-base-content px-4">
      <div className="w-full max-w-4xl bg-base-200 shadow-lg rounded-xl overflow-hidden grid md:grid-cols-2">
        {/* Left: Form */}
        <div className="p-8 md:p-10">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-primary">
              Create your BitBlog account
            </h2>
            <p className="text-sm text-base-content/70 mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-primary underline">
                Login here
              </Link>
            </p>
          </div>

          <form onSubmit={submitHandler} className="space-y-5">
            <div>
              <label className="block text-sm mb-1 text-base-content">
                Full Name
              </label>
              <input
                value={username}
                onChange={(e) => setusername(e.target.value)}
                type="text"
                placeholder="John Doe"
                className="input input-bordered w-full"
                disabled={loading}
              />
            </div>

            <div>
              <label className="block text-sm mb-1 text-base-content">
                Email
              </label>
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
              <label className="block text-sm mb-1 text-base-content">
                Password
              </label>
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
              <input
                required
                type="checkbox"
                className="checkbox checkbox-primary"
                disabled={loading}
              />
              <label className="text-sm text-base-content/70">
                I agree to the{" "}
                <a href="#" className="text-primary underline">
                  Terms
                </a>{" "}
                &{" "}
                <a href="#" className="text-primary underline">
                  Privacy Policy
                </a>
                .
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
                "Create Account"
              )}
            </button>
          </form>

          {/* 🌐 Google Login Button */}
          <div className="mt-6">
            <div className="divider">or</div>
            <button
              onClick={() => {
                window.location.href = "http://localhost:4000/auth/google";
              }}
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

        {/* Right: Illustration */}
        <div className="hidden md:block bg-base-300 p-6">
          <img
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg"
            alt="illustration"
            className="object-contain h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
