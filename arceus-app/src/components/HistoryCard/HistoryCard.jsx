import "./HistoryCard.css";
import Table from "react-bootstrap/Table";
import { useState, useEffect } from "react";
import { useAuth } from "../../store/auth-context";
import { db } from "../../firebaseConfig";
import { get, child, ref, onValue } from "firebase/database";

const HistoryCard = () => {
  const { currentUser } = useAuth();
  const [historylist, setHistoryList] = useState([]);
  useEffect(() => {
    if (currentUser) {
      get(child(ref(db), "users-profile/" + currentUser.uid + "/history"))
        .then((snapshot) => {
          if (snapshot.exists()) {
            setHistoryList(Object.values(snapshot.val()).reverse());
            // console.log(snapshot.val());
          }
        })
        .catch((error) => {
          console.log(error.code);
        });

      onValue(
        child(ref(db), "users-profile/" + currentUser.uid + "/history"),
        (snapshot) => {
          setHistoryList(Object.values(snapshot.val()).reverse());
        }
      );
    }
  }, [currentUser]);

  return (
    <div className="history-container bg-white">
      {" "}
      <Table className="history-table" striped>
        <thead className="table-head">
          <tr>
            <th>Date</th>
            <th>Carbs Goal</th>
            <th>Carbs Intake</th>
            <th>Protein Goal</th>
            <th>Protein Intake</th>
            <th>Fat Goal</th>
            <th>Fat Intake</th>
            <th>Calories Goal</th>
            <th>Calories Intake</th>
          </tr>
        </thead>
        <tbody>
          {historylist.map((history) => {
            return (
              <tr key={history.date}>
                <td>{history.date}</td>
                <td>{history.carbGoal}g</td>
                <td>{history.carbIntake}g</td>
                <td>{history.proteinGoal}g</td>
                <td>{history.proteinIntake}g</td>
                <td>{history.fatGoal}g</td>
                <td>{history.fatIntake}g</td>
                <td>{history.calorieGoal}g</td>
                <td>{history.calorieIntake}g</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryCard;
