import React from "react";
import Layout from "../../components/Layout/Layout";
import UserMenu from "../../components/Layout/UserMenu";
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();

  const dashboardInfoStyle = {
    marginBottom: "20px",
    padding: "20px",
    backgroundColor: "#f8f9fa",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  };

  const dashboardLabelStyle = {
    fontSize: "1.5rem",
    fontWeight: 600,
    color: "#343a40",
    marginBottom: "10px",
  };

  const dashboardValueStyle = {
    fontSize: "1.25rem",
    fontWeight: 400,
    color: "#495057",
  };

  return (
    <Layout title={"Dashboard - Ecommerce App"}>
      <div
        className="container-fluid m-3 p-3 dashboard"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div
              className="card dashboard-card"
              style={{
                padding: "30px",
                borderRadius: "12px",
                backgroundColor: "#ffffff",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div style={dashboardInfoStyle}>
                <h3 style={dashboardLabelStyle}>Name</h3>
                <h4 style={dashboardValueStyle}>{auth?.user?.name}</h4>
              </div>
              <div style={dashboardInfoStyle}>
                <h3 style={dashboardLabelStyle}>Email</h3>
                <h4 style={dashboardValueStyle}>{auth?.user?.email}</h4>
              </div>
              <div style={dashboardInfoStyle}>
                <h3 style={dashboardLabelStyle}>City</h3>
                <p style={dashboardValueStyle}>{auth?.user?.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;