import MyProfile from "../../components/MyProfile/MyProfile";
import Navbar from "../../components/Navbar/Navbar";
import {motion} from 'framer-motion'
const ProfilePage = () => {
  return (
    <motion.div
    initial={{opacity:0}}
      animate={{opacity:1}}
      exit={{opacity:0}}
    >
      <Navbar />
      <div className="p-16">
        <MyProfile />
      </div>
    </motion.div>
  );
};

export default ProfilePage;
