import Tracker from "../../components/Tracker/Tracker";
import Navbar from "../../components/Navbar/Navbar";
import RecipeByID from "../../components/RecipeCard/RecipeByID";
import { db } from "../../firebaseConfig";
import { useAuth } from "../../store/auth-context";
import { get, ref, child } from "firebase/database";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const GoalPage = () => {
  const { currentUser } = useAuth();
  const [favList, setFavList] = useState([]);

  useEffect(() => {
    if (currentUser) {
      get(child(ref(db), "users-profile/" + currentUser.uid + "/favourites"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setFavList(Object.values(snapshot.val()));
          }
        })
        .catch((error) => {
          console.log(error.code);
        });
    }
  }, [currentUser]);

  return (
    <motion.div
      className="h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Navbar />
      <div className="flex h-[93%]">
        <Tracker />
        <div className="flex flex-col items-center w-full">
          <h1 className="font-bold text-3xl border-b-2 border-black w-full text-center pt-4 pb-2 mb-4">
            ❤️ Favourites ❤️
          </h1>
          <div className="flex flex-col gap-10 overflow-auto px-4 h-full">
            {favList.length > 0 ? (
              favList.map((recipeID) => {
                return <RecipeByID id={recipeID} key={recipeID} />;
              })
            ) : (
              <p>Currently, you do not have any Favorite Recipes.</p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default GoalPage;
