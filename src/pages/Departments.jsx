import { Link, Outlet } from "react-router-dom";

const Departments = () => {
  return (
    <div className="page departments">
      <h2>Departments</h2>
      <div className="dept-nav">
        <ul>
          <li>
            <Link to="hr" className="dept-link">
              HR Department
            </Link>
          </li>
          <li>
            <Link to="finance" className="dept-link">
              Finance Department
            </Link>
          </li>
        </ul>
      </div>
      <div className="dept-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Departments;
