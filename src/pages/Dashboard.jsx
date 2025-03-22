import Sidebar from "../components/Sidebar";
import useFetchUser from "../hooks/useFetchUser";

const Dashboard = () => {
  useFetchUser();
  //   const user = useSelector((state) => state.user.user);

  return (
    <div className="container">
      <Sidebar />
    </div>
  );
};

export default Dashboard;
