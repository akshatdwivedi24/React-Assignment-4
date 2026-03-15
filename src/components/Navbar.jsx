import { NavLink } from "react-router-dom";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">CorpPortal</div>
      <ul className="navbar-links">
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employees"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Employees
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/departments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Departments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/profile/1"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <button className="auth-btn" onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </nav>
  );
};

export default Navbar;
