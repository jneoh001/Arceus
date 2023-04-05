import Navbar from "../../components/Navbar/Navbar";
import HistoryCard from "../../components/HistoryCard/HistoryCard";
import {motion} from 'framer-motion'

const HistoryPage = () => {
  return (
    <motion.div className="w-screen"
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    >
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <HistoryCard />
      </div>
    </motion.div>
  );
};

export default HistoryPage;
