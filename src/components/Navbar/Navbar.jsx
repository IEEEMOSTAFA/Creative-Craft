
// import  { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
// import AuthProvider, { AuthContext } from '../../providers/AuthProvider';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);


  const handleSignOut = () => {
    // logOut()
    logOut()
      .then(() => console.log('User signed out successfully'))
      .catch((error) => console.error('Error signing out:', error));
  };

  const navLinks = (
    <>
      <li><NavLink to="/" className="hover:text-blue-500">Home</NavLink></li>
      <li><NavLink to="alArt" className="hover:text-blue-500">All Art</NavLink></li>
      <li><NavLink to="addCraft" className="hover:text-blue-500">Add Craft</NavLink></li>
      <li><NavLink to="myCraft" className="hover:text-blue-500">My Art&Craft</NavLink></li>

      {!user && (
        <>
          <li><NavLink to="login" className="hover:text-blue-500">Login</NavLink></li>
          <li><NavLink to="register" className="hover:text-blue-500">Register</NavLink></li>
        </>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-lg">
      {/* Mobile View */}
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
            {navLinks}
          </ul>
        </div>

        {/* Logo */}

        <a className="btn btn-ghost text-xl flex items-center gap-2">
          {/* Replace with your actual image path */}
          <img
            src="https://i.ibb.co/ZpxW9pT9/textile-img.jpg"

            alt="Textile Art Logo"
            className="h-8 w-8 rounded-full"
          />






          Textile Art
        </a>

      </div>

      {/* Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>

      {/* Auth Buttons */}

      {/* Here photo whose person login his img : */}


      <div className="navbar-end flex items-center gap-3 mx-2">
        {user && user.photoURL && (
          <img
            src={user.photoURL}
            alt={user.displayName || "User"}
            className="h-8 w-8 rounded-full border-2 border-blue-500"
            title={user.displayName || 'User'}
            onError={e => { e.target.src = "https://i.ibb.co/ZpxW9pT9/textile-img.jpg"; }}
          />
        )}


        
        {user ? (
          <button onClick={handleSignOut} className="btn btn-warning">Sign Out</button>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline btn-primary">Login</button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline btn-primary">Register</button>
            </Link>
          </>
        )}
      </div>

    </div>
  );
};

export default Navbar;























