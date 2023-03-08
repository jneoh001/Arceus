import { useEffect, useState } from "react";
const Tracker = () => {
  const goal = 500;
  const [intake, setIntake] = useState(200);
  const [percentage, setPercentage] = useState((intake / goal) * 100 + "%");

  const addHandler = () => {
    setIntake((pre) => {
      return pre + 10;
    });
  };
  const subtractHandler = () => {
    setIntake((pre) => {
      return pre - 10;
    });
  };

  useEffect(() => {
    setPercentage((intake / goal) * 100 + "%");
  }, [intake]);

  return (
    <div className="p-4 w-1/2 border-2 border-black bg-white">
      <h1 className="font-bold text-5xl mb-16 mt-4">Daily Goal</h1>
      <div className="mb-1 text-black font-semibold text-lg">Carbohydrates</div>
      <div className="w-full rounded-full h-7 mb-4 dark:bg-gray-300">
        <div
          className="bg-green-600 h-7 rounded-full dark:bg-green-500 "
          style={{ width: percentage }}
        ></div>
      </div>
      <div className="mb-1 text-black font-semibold text-lg">Protein</div>
      <div className="w-full rounded-full h-7 mb-4 dark:bg-gray-300">
        <div
          className="bg-indigo-600 h-7 rounded-full dark:bg-indigo-500 "
          style={{ width: percentage }}
        ></div>
      </div>
      <div className="mb-1 text-black font-semibold text-lg">Fats</div>
      <div className="w-full rounded-full h-7 mb-4 dark:bg-gray-300">
        <div
          className="bg-yellow-400 h-7 rounded-full "
          style={{ width: percentage }}
        ></div>
      </div>
      <div className="mb-1 text-black font-semibold text-lg">Calories</div>
      <div className="w-full rounded-full h-7 mb-4 dark:bg-gray-300">
        <div
          className="bg-red-600 h-7 rounded-full dark:bg-red-500"
          style={{ width: percentage }}
        ></div>
      </div>
      <button
        onClick={addHandler}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        +
      </button>{" "}
      <button
        onClick={subtractHandler}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        -
      </button>
    </div>
  );
};

export default Tracker;
