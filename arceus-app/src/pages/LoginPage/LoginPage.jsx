import LoginCard from "../../components/LoginCard/LoginCard";
import Navbar from "../../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

function RerouteHandler(){
  const location = useLocation();
  const error = location.state?.message;
  console.log(error);
  return (
    <>
      {error && <p>{error}</p>}
    </>
  );
};

const LoginPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-20">
        <RerouteHandler/>
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginPage;
