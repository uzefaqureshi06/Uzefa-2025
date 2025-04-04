import { useState } from "react";
import { useDispatch } from 'react-redux';
import { signin, signUp } from '../../redux/action/auth';
import { useNavigate } from "react-router-dom";

export default function Auth() {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (isSignUp) {
        dispatch(signUp({ name, email, password, avatar }))
            .then(() => {
                const user = JSON.parse(localStorage.getItem("profile"));
                console.log("User ID after Signup:", user?.id);  // ✅ Debugging
                window.location.reload();
            });
    } else {
        dispatch(signin({ email, password }))
            .then(() => {
                const user = JSON.parse(localStorage.getItem("profile"));
                console.log("User ID after Signin:", user?.id);  // ✅ Debugging
            });
    }
    navigate("/");
};
  

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setAvatar(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold text-center text-purple-800">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        <div className="w-16 border-b-2 border-purple-800 mx-auto my-2"></div>

        {/* ✅ Form now submits properly */}
        <form className="mt-6" onSubmit={handleSubmit}>
          {isSignUp && (
            <>
              <div className="flex flex-col items-center mb-4">
                <label htmlFor="avatarUpload" className="cursor-pointer">
                  {avatar ? (
                    <img src={avatar} alt="Profile" className="w-20 h-20 rounded-full object-cover border-2 border-purple-500" />
                  ) : (
                    <div className="w-20 h-20 flex justify-center items-center rounded-full bg-gray-200 text-gray-500">
                      Upload
                    </div>
                  )}
                </label>
                <input type="file" id="avatarUpload" className="hidden" accept="image/*" onChange={handleAvatarChange} />
              </div>

              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none mb-4"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </>
          )}

          <input
            type="email"
            placeholder="abc@gmail.com"
            className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="********"
            className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {!isSignUp && (
            <p className="text-center text-gray-500 text-sm">
              Lost Password? <a href="#" className="text-purple-600 hover:underline">Click Here!</a>
            </p>
          )}

          {/* ✅ Fixed Buttons to Toggle Signup/Login Correctly */}
          <div className="flex gap-4 mt-4">
            <button
              type="button"
              className={`w-1/2 py-2 text-white font-bold rounded-lg ${!isSignUp ? "bg-purple-700 hover:bg-purple-900" : "bg-gray-300 text-gray-500"}`}
              onClick={() => setIsSignUp(false)}
            >
              Login
            </button>

            <button
              type="button"
              className={`w-1/2 py-2 text-white font-bold rounded-lg ${isSignUp ? "bg-purple-700 hover:bg-purple-900" : "bg-gray-300 text-gray-500"}`}
              onClick={() => setIsSignUp(true)}
            >
              Sign Up
            </button>
          </div>

          {/* ✅ Submit button */}
          <button
            type="submit"
            className="w-full mt-4 py-2 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-800"
          >
            {isSignUp ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}



