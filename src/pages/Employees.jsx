import { Link } from "react-router-dom";

const dummyEmployees = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "Bob Brown" },
];

const Employees = () => {
  return (
    <div className="page employees">
      <h2>Employees List</h2>
      <ul className="employee-list">
        {dummyEmployees.map((emp) => (
          <li key={emp.id} className="employee-list-item">
            <span>
              {emp.name} (ID: {emp.id})
            </span>
            <Link to={`/profile/${emp.id}`} className="view-profile-btn">
              View Profile
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
