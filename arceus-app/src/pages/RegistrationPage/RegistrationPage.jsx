import RegistrationCard from "../../components/RegistrationCard/RegistrationCard";
import Navbar from "../../components/Navbar/Navbar";
import './RegistrationPage.css'
import {motion} from 'framer-motion'

const RegistrationPage = () => {
  return (
    <motion.div className="h-screen"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Navbar />
      <main 
      id = "grid"
      className="grid grid-cols-2 grid-rows-1">


        <img 
        id = "decorativeImage"
        className="h-screen" 
        // src="https://lh3.googleusercontent.com/JnwVBVtFyJK-Ft558cGwOz5a9M-zbNozKmGmqMrR_Br2vTcPnJyt9em9iZVUpZFSCYchRjHUnqqNuxmDE4_OJh_oaqpAkyEo62M8xfjr" 
        src="https://assets.epicurious.com/photos/6362d443105688a4b1411056/3:4/width_1024/Epicurious-Id-portal-Image.png" 
        alt="text" 
        />

        <RegistrationCard className="h-screen w-2/3 min-w-2/3"/>

      </main>
    </motion.div>
  );
};

export default RegistrationPage;
