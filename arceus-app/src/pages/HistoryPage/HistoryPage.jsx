import Navbar from "../../components/Navbar/Navbar";
import HistoryCard from "../../components/HistoryCard/HistoryCard";

const HistoryPage = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <HistoryCard />
      </div>
    </div>
  );
};

export default HistoryPage;
