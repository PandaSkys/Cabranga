import Sidebar from "../components/Sidebar";
import { useAuth } from "../hooks/useAuth";

const Dashboard = () => {
  // const user = useAuth();

  return (
    <div className="container">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
