import MyProfile from "../../components/MyProfile/MyProfile";
import Navbar from "../../components/Navbar/Navbar";
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <div className="p-16">
        <MyProfile />
      </div>
    </div>
  );
};

export default ProfilePage;
