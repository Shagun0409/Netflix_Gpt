import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
 import { useNavigate } from "react-router-dom";  
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate(); 
  
  const user = useSelector((store) => store.user);
  
  const handleSignOut = () => {


signOut(auth).then(() => {
  // Sign-out successful.
  navigate("/");
}).catch((error) => {
  navigate("/error");
});

  }

  return (
    <div className="absolute top-0 left-0 px-8 py-2 z-50  flex justify-between items-center w-full  ">
      <img
        className="w-30"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="Netflix Logo"
        style={{ width: "150px", height: "50px" }}
      />
      <div className="inline-block ml-4">
        <img
          className="w-10 h-10 rounded-full inline-block"
          src={user?.photoURL}
          alt="User Avatar"
        />
        <button onClick={handleSignOut} className="bg-red-600 px-4 py-1 rounded cursor-pointer text-white font-bold">
          Sign out
        </button>
      </div>
    </div>
  )
}
export default Header