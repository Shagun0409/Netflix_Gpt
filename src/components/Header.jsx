import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
 import { useNavigate } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
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

const showGptSearch  = useSelector(store => store.gpt.showGptSearch);

  const handleSignOut = () => {


      signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        navigate("/error");
      });

  }

  const handleGptSearch = () => {
    //toggle gpt search component
    dispatch(toggleGptSearchView());
  }

  const handLanguaeChange = (e) => {
  dispatch(changeLanguage(e.target.value));
  }

  return (

    <div className="absolute top-0 left-0 px-8 py-2 z-50  flex justify-between items-center w-full  ">


      
      <img
        className="w-30"
        src={LOGO_URL}
        alt="Netflix Logo"
        style={{ width: "150px", height: "50px" }}
      />

      {user &&
        <div className="inline-block ml-4">

          
          {showGptSearch && (
            <select className="p-2 m-2 bg-black text-white " onChange={handLanguaeChange} >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.label}
                </option>
              ))}
            </select>
          )}
          <button className="bg-red-600  m-2 px-4 py-1 rounded cursor-pointer text-white font-bold"
            onClick={handleGptSearch}>
            {showGptSearch ? "Home": "GptSearch"}
          </button>
        <img
          className="w-10 h-10 rounded-full inline-block"
          src={user?.photoURL}
          alt="User Avatar"
        />
        <button onClick={handleSignOut} className="bg-red-600 px-4 py-1 rounded cursor-pointer text-white font-bold m-2">
          Sign out
        </button>
      </div>}
    </div>
  )
}
export default Header