import { useState } from "react";

export default function Auth() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className=" flex justify-center items-center min-h-screen bg-gradient-to-b from-indigo-900 to-purple-800">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-purple-800">
          {isSignUp ? "SignUp" : "Login"}
        </h2>
        <div className="w-16 border-b-2 border-purple-800 mx-auto my-2"></div>

        <form className="mt-6">
          {isSignUp && (
            <div className="relative mb-4">
              <i className="bx bxs-user absolute left-3 top-3 text-gray-500 text-xl"></i>
              <input
                type="text"
                placeholder="Name"
                className="pl-10 w-full p-2 border rounded-lg bg-gray-100 focus:outline-none"
              />
            </div>
          )}

          <div className="relative mb-4">
            <i className="bx bxs-envelope absolute left-3 top-3 text-gray-500 text-xl"></i>
            <input
              type="email"
              placeholder="abc@gmail.com"
              className="pl-10 w-full p-2 border rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>

          <div className="relative mb-4">
            <i className="bx bxs-lock-alt absolute left-3 top-3 text-gray-500 text-xl"></i>
            <input
              type="password"
              placeholder="********"
              className="pl-10 w-full p-2 border rounded-lg bg-gray-100 focus:outline-none"
            />
          </div>

          {!isSignUp && (
            <p className="text-center text-gray-500 text-sm">
              Lost Password?{" "}
              <a href="#" className="text-purple-600 hover:underline">
                Click Here!
              </a>
            </p>
          )}

          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className={`w-1/2 py-2 text-white font-bold rounded-lg transition-all ${
                isSignUp
                  ? "bg-gray-300 text-gray-500"
                  : "bg-purple-700 hover:bg-purple-900"
              }`}
              onClick={() => setIsSignUp(false)}
            >
              Login
            </button>

            <button
              type="button"
              className={`w-1/2 py-2 text-white font-bold rounded-lg transition-all ${
                isSignUp
                  ? "bg-purple-700 hover:bg-purple-900"
                  : "bg-gray-300 text-gray-500"
              }`}
              onClick={() => setIsSignUp(true)}
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
