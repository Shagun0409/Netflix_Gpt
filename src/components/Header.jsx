import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
 import { useNavigate } from "react-router-dom";  
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState, useRef } from "react";
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

  const currentLang = useSelector((store) => store.config?.lang);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  // close mobile menu on outside click
  useEffect(() => {
    const onDocClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener("click", onDocClick);
    return () => document.removeEventListener("click", onDocClick);
  }, []);

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

  const handleLanguageChange = (valueOrEvent) => {
    const value = typeof valueOrEvent === "string" ? valueOrEvent : valueOrEvent.target.value;
    dispatch(changeLanguage(value));
  }

  return (

    <header className="fixed top-0 left-0 px-4 sm:px-6 md:px-8 py-2 z-50 flex items-center justify-between w-full bg-black/50 backdrop-blur-sm border-b border-gray-800">

      <img
        className="h-8 sm:h-10 md:h-12 w-auto"
        src={LOGO_URL}
        alt="Netflix Logo"
        style={{ objectFit: 'contain' }}
      />

      {user && (
        <div className="flex items-center gap-2">
          {/* desktop controls */}
          <div className="hidden sm:flex items-center gap-2">
            {showGptSearch && (
              <select
                className="px-2 py-1 bg-black text-white border-2 border-red-600 rounded font-semibold"
                onChange={handleLanguageChange}
                value={currentLang}
                style={{ color: '#ffffff', backgroundColor: '#000000' }}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.identifier} value={lang.identifier}>
                    {lang.label}
                  </option>
                ))}
              </select>
            )}

            <button className="bg-red-600 px-3 py-1 rounded text-white font-bold" onClick={handleGptSearch}>
              <span className="hidden md:inline">{showGptSearch ? 'Home' : 'GptSearch'}</span>
              <span className="md:hidden">{showGptSearch ? 'Home' : 'GPT'}</span>
            </button>

            <img className="w-9 h-9 rounded-full border-2 border-red-600 object-cover" src={user?.photoURL} alt="User Avatar" />

            <button onClick={handleSignOut} className="bg-red-600 px-3 py-1 rounded text-white font-bold">Sign out</button>
          </div>

          {/* mobile menu button */}
          <div className="sm:hidden relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen((s) => !s)}
              className="p-2 rounded bg-black/60 text-white border border-gray-700"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {menuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black border-2 border-red-600 rounded shadow-lg py-2 z-50">
                {showGptSearch && (
                  <div className="px-3 py-1">
                    <div className="text-gray-300 text-sm mb-2">Language</div>
                    {SUPPORTED_LANGUAGES.map((lang) => (
                      <button key={lang.identifier} onClick={() => handleLanguageChange(lang.identifier)} className="block w-full text-left px-2 py-2 text-white hover:bg-gray-800 rounded text-sm">
                        {lang.label}
                      </button>
                    ))}
                  </div>
                )}

                <button className="w-full text-left px-3 py-2 text-white hover:bg-gray-800" onClick={handleGptSearch}>
                  {showGptSearch ? 'Home' : 'GptSearch'}
                </button>
                <button className="w-full text-left px-3 py-2 text-white hover:bg-gray-800" onClick={handleSignOut}>
                  Sign out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  )
}
export default Header