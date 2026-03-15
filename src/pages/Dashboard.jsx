const Dashboard = () => {
  return (
    <div className="page dashboard">
      <h1>Welcome to the Corporate Portal</h1>
      <div className="stats-container">
        <div className="stat-card">
          <h3>Total Employees</h3>
          <p className="stat-value">1,245</p>
        </div>
        <div className="stat-card">
          <h3>Total Departments</h3>
          <p className="stat-value">12</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
