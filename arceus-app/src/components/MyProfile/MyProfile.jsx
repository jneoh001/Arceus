import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../store/auth-context";
import Progress from "../Tracker/Progress";

const MyProfile = () => {
  const { logout, userDetails, userIntake } = useAuth();
  const navigate = useNavigate();
  function logoutHandler() {
    logout();
    navigate("/login", {
      replace: true,
      state: {
        message: "You have Succesfully Logged Out.",
      },
    });
  }
  return (
    <div className="px-32 text-xl">
      <h1 className="font-bold text-5xl">My Account </h1>
      <hr className="w-full h-1 mt-4 mb-4 bg-black rounded" />
      <div className="grid grid-cols-5 gap-3">
        <p className="flex gap-3 items-center">
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </span>
          Username
        </p>
        <p className="col-span-4 border-l-2 border-black pl-4">
          {userDetails.fname + " " + userDetails.lname}
        </p>
        <p className="flex gap-3 items-center">
          {" "}
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </span>
          Email
        </p>
        <p className="col-span-4 border-l-2 border-black pl-4">
          {userDetails.email}
        </p>
        <p className="flex gap-3 items-center">
          {" "}
          <span>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
              />
            </svg>
          </span>
          Height{" "}
        </p>
        <p className="col-span-4 border-l-2 border-black pl-4">
          {userDetails.height} cm
        </p>
        <p className="flex gap-3 items-center">
          {" "}
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0012 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 01-2.031.352 5.988 5.988 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0l2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 01-2.031.352 5.989 5.989 0 01-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971z"
              />
            </svg>
          </span>
          Weight
        </p>
        <p className="col-span-4 border-l-2 border-black pl-4">
          {userDetails.weight} kg
        </p>
      </div>
      <h1 className="font-bold text-3xl my-12">My Goal </h1>
      <div className="grid grid-cols-7 gap-4 items-center">
        <p className="flex col-span-2 gap-3 justify-left items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
          Calorie
        </p>
        <p>{userDetails.calorieGoal} kcal</p>
        <div className="col-span-4">
          <Progress
            percentage={
              userIntake
                ? (userIntake.calorie / userDetails.calorieGoal) * 100 >= 100
                  ? "100%"
                  : Math.round(
                      (userIntake.calorie / userDetails.calorieGoal) * 100
                    ) + "%"
                : "0%"
            }
            className="from-rose-500 via-red-400 to-red-500 mb-0"
          />
        </div>
        <p className="flex col-span-2 gap-3 justify-left items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 007.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 002.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 012.916.52 6.003 6.003 0 01-5.395 4.972m0 0a6.726 6.726 0 01-2.749 1.35m0 0a6.772 6.772 0 01-3.044 0"
            />
          </svg>
          Carbohydrate
        </p>
        <p>{userDetails.carbGoal} g</p>
        <div className="col-span-4 ">
          <Progress
            percentage={
              userIntake
                ? (userIntake.carb / userDetails.carbGoal) * 100 >= 100
                  ? "100%"
                  : Math.round((userIntake.carb / userDetails.carbGoal) * 100) +
                    "%"
                : "0%"
            }
            className="from-emerald-500 to-lime-600"
          />
        </div>
        <p className="flex col-span-2 gap-3 justify-left items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
            />
          </svg>
          Protein
        </p>
        <p>{userDetails.proteinGoal} g</p>
        <div className="col-span-4">
          <Progress
            percentage={
              userIntake
                ? (userIntake.protein / userDetails.proteinGoal) * 100 >= 100
                  ? "100%"
                  : Math.round(
                      (userIntake.protein / userDetails.proteinGoal) * 100
                    ) + "%"
                : "0%"
            }
            className="from-sky-400 to-blue-500"
          />
        </div>
        <p className="flex  col-span-2 gap-3 justify-left items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
            />
          </svg>
          Fat
        </p>
        <p>{userDetails.fatGoal} g</p>
        <div className="col-span-4">
          <Progress
            percentage={
              userIntake
                ? (userIntake.fat / userDetails.fatGoal) * 100 >= 100
                  ? "100%"
                  : Math.round((userIntake.fat / userDetails.fatGoal) * 100) +
                    "%"
                : "0%"
            }
            className="from-yellow-200 via-yellow-300 to-yellow-400"
          />
        </div>
      </div>
      <div className="flex justify-around w-full">
        <Link to="/editprofile">
          <button className="mt-12 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
            Edit Profile
          </button>
        </Link>
        <button
          onClick={logoutHandler}
          type="submit"
          className="mt-12 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
