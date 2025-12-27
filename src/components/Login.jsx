import { useRef, useState } from "react";
import Header from "./Header"
import { checkValidData } from "../utils/Validate";

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage,seterrormessage]= useState(null);
  const email=useRef(null);
  const password=useRef(null);

  const handleButtonClick = () => {

    const message=checkValidData(email.current.value, password.current.value);

    seterrormessage(message);

  
} 
const toggleSignInForm = () => {
  setisSignInForm(!isSignInForm);
}

  return (
    <div>
      <Header />

      <div className="absolute ">
      <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="Background Image"  />
      </div>

      <form onSubmit={(e)=> e.preventDefault()} className="my-40 absolute p-12 bg-black w-3/12 mx-auto right-0 left-0 rounded  flex flex-col items-center" style={{ opacity: 0.8 }}> 
        <h1 className="text-3xl mb-6 text-white py-4 font-bold">{isSignInForm ? "Sign In" : "Sign Up"}      </h1>
        
        {!isSignInForm &&
          <input
          type="text"
          placeholder="Full Name"
          className="bg-gray-700 text-white py-2 m-2 px-2 border-2 w-full"
        />
        }
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="bg-gray-700 text-white py-2 m-2 px-2 border-2 w-full"
        />
        
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="bg-gray-700 text-white py-2 m-2 px-2 border-2 w-full"
        />
        <p className="text-red-50">{errorMessage}</p>
        <button className="bg-red-600 p-2 m-2 rounded w-full text-white"
            onClick={handleButtonClick}
        >{isSignInForm ? "Sign In" : "Sign Up"}</button>
        

       
        
        <h1 className="text-3xl mb-6 text-white py-4 font-bold">OR

        </h1>
        <button className=" py-2 m-2 px-2 text-white  w-full rounded bg-gray-400
        ">Use a Sign In Code
        </button>

        <h1 className="font-bold text-white underline">
            Forgot Password?
        </h1>
        <div>
          <input type="checkbox" className="mt-4" />
            <span className="text-white"> Remember me</span>
        </div>

        <p className="text-white font-bold cursor-pointer" onClick={toggleSignInForm} >
          {isSignInForm ? "New to Netflix? " : "Already registered?" }
          <span className="font-bold text-white underline" >
            {isSignInForm ? "Sign up now? " : "Sign In Now" }
          </span>
        </p>



      </form>


    </div>
  )
}
export default Login