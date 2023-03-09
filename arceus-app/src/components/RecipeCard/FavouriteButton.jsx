import { db } from "../../firebaseConfig";
import { ref, update, child, push, get, remove } from "firebase/database";
import { useAuth } from "../../store/auth-context";
import { useState, useEffect } from "react";

const FavouriteButton = (props) => {
  const { currentUser } = useAuth();
  const [myFill, setMyFill] = useState("fill-transparent");
  const [myKey, setMyKey] = useState("");

  useEffect(() => {
    if (currentUser) {
      get(child(ref(db), "users-profile/" + currentUser.uid + "/favourites"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            for (let key in snapshot.val()) {
              if (props.id == snapshot.val()[key]) {
                setMyFill("fill-red-500");
                setMyKey(key);
              }
            }
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [currentUser, myFill]);

  const addToFavouriteHandler = (e) => {
    const endpt = "users-profile";

    if (myFill == "fill-transparent") {
      setMyFill("fill-red-500");
      const newPostKey = push(child(ref(db), endpt)).key;
      const updates = {};
      updates[
        "/" + endpt + "/" + currentUser.uid + "/favourites/" + newPostKey
      ] = props.id;
      update(ref(db), updates);
      console.log("Data added!");
    } else {
      remove(
        ref(db, "/" + endpt + "/" + currentUser.uid + "/favourites/" + myKey)
      )
        .then(() => {
          console.log("Data is Removed!");
        })
        .catch((error) => {
          console.log(error.code);
        });
      setMyFill("fill-transparent");
    }
    e.preventDefault();
  };

  return (
    <svg
      width={80}
      onClick={addToFavouriteHandler}
      viewBox="0 0 512 512"
      className={`${myFill} stroke-[10px] stroke-black hover:fill-red-500 bg-white hover:cursor-pointer`}
    >
      <title>Heart</title>
      <path d="M256 448a32 32 0 01-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63 114.52 98.46 64 159.08 64c44.08 0 74.61 24.83 92.39 45.51a6 6 0 009.06 0C278.31 88.81 308.84 64 352.92 64c60.62 0 110.45 50.52 111.08 112.64.54 54.21-18.63 104.26-58.61 153-18.77 22.87-52.8 59.45-131.39 112.8a32 32 0 01-18 5.56z" />
    </svg>
  );
};

export default FavouriteButton;
