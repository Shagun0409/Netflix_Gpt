import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
 import { useNavigate } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constant";
const Header = () => {
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  

 useEffect(() => { 
  onAuthStateChanged(auth, (user) => {
      if (user) {

        const { uid, email, displayName , photoURL} = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL
        }));
        navigate("/Browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");  
      }
    });

  }, []);



  const handleSignOut = () => {


      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        navigate("/error");
      });

  }

  return (
    <div className="absolute top-0 left-0 px-8 py-2 z-50  flex justify-between items-center w-full  ">
      <img
        className="w-30"
        src={LOGO_URL}
        alt="Netflix Logo"
        style={{ width: "150px", height: "50px" }}
      />

     {user && <div className="inline-block ml-4">
        <img
          className="w-10 h-10 rounded-full inline-block"
          src={user?.photoURL}
          alt="User Avatar"
        />
        <button onClick={handleSignOut} className="bg-red-600 px-4 py-1 rounded cursor-pointer text-white font-bold">
          Sign out
        </button>
      </div>}
    </div>
  )
}
export default Header