import RegistrationCard from "../../components/RegistrationCard/RegistrationCard";
import Navbar from "../../components/Navbar/Navbar";

const RegistrationPage = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="flex justify-center items-center mt-20">
        <RegistrationCard />
      </div>
    </div>
  );
};

export default RegistrationPage;
