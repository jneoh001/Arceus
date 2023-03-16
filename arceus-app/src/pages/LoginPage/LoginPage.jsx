import LoginCard from "../../components/LoginCard/LoginCard";
import Navbar from "../../components/Navbar/Navbar";

const LoginPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-20">
        <LoginCard />
      </div>
    </div>
  );
};

export default LoginPage;
