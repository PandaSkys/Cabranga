import { useNavigate } from "react-router";
import Sidebar from "../components/Sidebar";
import { useFetchUser } from "../hooks/useFetchUser";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const Dashboard = () => {
  useFetchUser();
  const { user, loading } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading && !user) {
      navigate("/login");
    }
  }, [user, loading, navigate]);

  return (
    <div className="dashboard">
      <Sidebar />
      <main className="content">
        <div className="container">
          <div className="box box-1"></div>
          <div className="box box-2"></div>
          <div className="box box-3"></div>
          <div className="box box-4"></div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
