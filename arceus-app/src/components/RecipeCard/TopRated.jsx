import { ref, get, child } from "firebase/database";
import { db } from "../../firebaseConfig";
import { useState, useEffect } from "react";
import RecipeByID from "./RecipeByID";

const TopRated = () => {
  const [list, setList] = useState();
  useEffect(() => {
    get(child(ref(db), "top-rated"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setList(Object.keys(snapshot.val()));
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);
  return (
    <div>
      {list &&
        list.map((item) => {
          return <RecipeByID key={item} id={item} />;
        })}
    </div>
  );
};

export default TopRated;
