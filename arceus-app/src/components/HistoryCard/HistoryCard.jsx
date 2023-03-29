import "./HistoryCard.css";
import Table from "react-bootstrap/Table";
import { useAuth } from "../../store/auth-context";

const HistoryCard = () => {
  const { userHistory } = useAuth();

  return (
    <div className="history-container bg-white">
      {" "}
      <Table className="history-table" striped>
        <thead className="table-head">
          <tr>
            <th>Date</th>
            <th>Carbs Goal / g</th>
            <th>Carbs Intake / g</th>
            <th>Protein Goal / g</th>
            <th>Protein Intake / g</th>
            <th>Fat Goal / g</th>
            <th>Fat Intake / g</th>
            <th>Calories Goal / kcal</th>
            <th>Calories Intake / kcal</th>
          </tr>
        </thead>
        <tbody>
          {userHistory.map((history) => {
            return (
              <tr key={history.date}>
                <td>{history.date}</td>
                <td>{history.carbGoal}</td>
                <td>{history.carbIntake.toFixed(2)}</td>
                <td>{history.proteinGoal}g</td>
                <td>{history.proteinIntake.toFixed(2)}</td>
                <td>{history.fatGoal} g</td>
                <td>{history.fatIntake.toFixed(2)}</td>
                <td>{history.calorieGoal}</td>
                <td>{history.calorieIntake.toFixed(2)}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default HistoryCard;
