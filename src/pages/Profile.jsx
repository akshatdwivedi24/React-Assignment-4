import { useParams, useNavigate } from "react-router-dom";

const dummyProfiles = {
  1: {
    name: "John Doe",
    role: "Software Engineer",
    email: "john@corp.com",
    phone: "123-456-7890",
  },
  2: {
    name: "Jane Smith",
    role: "Product Manager",
    email: "jane@corp.com",
    phone: "234-567-8901",
  },
  3: {
    name: "Alice Johnson",
    role: "UX Designer",
    email: "alice@corp.com",
    phone: "345-678-9012",
  },
  4: {
    name: "Bob Brown",
    role: "Data Analyst",
    email: "bob@corp.com",
    phone: "456-789-0123",
  },
};

const Profile = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const profileDetails = dummyProfiles[id];

  return (
    <div className="page profile">
      <h2>Employee Profile</h2>
      {profileDetails ? (
        <div className="profile-card">
          <h3>{profileDetails.name}</h3>
          <p>
            <strong>Employee ID:</strong> {id}
          </p>
          <p>
            <strong>Role:</strong> {profileDetails.role}
          </p>
          <p>
            <strong>Email:</strong> {profileDetails.email}
          </p>
          <p>
            <strong>Phone:</strong> {profileDetails.phone}
          </p>
        </div>
      ) : (
        <div className="error-message">
          <p>Profile for employee ID {id} not found.</p>
        </div>
      )}
      <button onClick={() => navigate("/employees")} className="back-btn">
        Back to Employees
      </button>
    </div>
  );
};

export default Profile;
