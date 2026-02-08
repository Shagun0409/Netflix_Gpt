import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidData } from "../utils/Validate";
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";
import { updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constant";

const Login = () => {
 
  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage,seterrormessage]= useState(null);
  const email=useRef(null);
  const password = useRef(null);
  const name = useRef(null); 
  const dispatch = useDispatch(); 

  const handleButtonClick = () => {

    const message=checkValidData(email.current.value, password.current.value);

    seterrormessage(message);

    if(message===""){
      if (!isSignInForm) {
              // Sign Up logic

        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;

            return updateProfile(user, {
              displayName: name.current.value,
              photoURL: USER_AVATAR
            });
          })
          .then(() => {
            const { uid, email, displayName , photoURL} = auth.currentUser;
                    dispatch(addUser({
                      uid: uid,
                      email: email,
                      displayName: displayName,
                      photoURL: photoURL
                    })
                    );
          })
          .catch((error) => {
            seterrormessage(error.message);
          });

      } else {
        // Sign In logic
       
        signInWithEmailAndPassword(auth,email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log( errorCode + errorMessage);
          });
      }
    }

       

  
} 
const toggleSignInForm = () => {
  setisSignInForm(!isSignInForm);
}

  return (
    <div className="min-h-screen w-full">
      <Header />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img 
          className="w-full h-full object-cover" 
          src={BG_URL} 
          alt="Background" 
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Login Form Container */}
      <div className="flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="w-full max-w-sm sm:max-w-md bg-black/80 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-lg shadow-2xl"
        > 
          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          
          {/* Name Input - Only for Sign Up */}
          {!isSignInForm && (
            <div className="mb-5">
              <input
                ref={name}
                type="text"
                placeholder="Full Name"
                className="w-full bg-gray-700/60 text-white placeholder-gray-400 py-3 px-4 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-700 transition"
              />
            </div>
          )}
          
          {/* Email Input */}
          <div className="mb-5">
            <input
              ref={email}
              type="email"
              placeholder="Email Address"
              className="w-full bg-gray-700/60 text-white placeholder-gray-400 py-3 px-4 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-700 transition"
            />
          </div>
          
          {/* Password Input */}
          <div className="mb-6">
            <input
              ref={password}
              type="password"
              placeholder="Password"
              className="w-full bg-gray-700/60 text-white placeholder-gray-400 py-3 px-4 rounded text-sm focus:outline-none focus:ring-2 focus:ring-red-600 focus:bg-gray-700 transition"
            />
          </div>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-500 text-sm mb-4 font-medium text-center">
              {errorMessage}
            </p>
          )}

          {/* Main Sign In/Up Button */}
          <button 
            onClick={handleButtonClick}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded text-base sm:text-lg transition duration-200 mb-6 cursor-pointer"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-6">
            <div className="flex-1 h-px bg-gray-600"></div>
            <span className="text-gray-400 text-sm font-semibold">OR</span>
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>

          {/* Sign In Code Button */}
          <button 
            type="button"
            className="w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold py-3 px-4 rounded text-base transition duration-200 mb-6 cursor-pointer"
          >
            Use a Sign In Code
          </button>

          {/* Forgot Password */}
          <div className="text-center mb-6">
            <h1 className="text-white text-sm font-semibold hover:underline cursor-pointer">
              Forgot Password?
            </h1>
          </div>

          {/* Remember Me */}
          <div className="flex items-center gap-2 mb-6">
            <input 
              type="checkbox" 
              id="remember" 
              className="w-4 h-4 cursor-pointer accent-red-600"
            />
            <label htmlFor="remember" className="text-gray-400 text-sm cursor-pointer">
              Remember me
            </label>
          </div>

          {/* Sign Up/In Toggle */}
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {isSignInForm ? "New to Netflix? " : "Already registered? "}
              <span 
                onClick={toggleSignInForm}
                className="text-white font-semibold hover:underline cursor-pointer transition"
              >
                {isSignInForm ? "Sign up now" : "Sign In now"}
              </span>
            </p>
          </div>

        </form>
      </div>
    </div>
  )
}
export default Login