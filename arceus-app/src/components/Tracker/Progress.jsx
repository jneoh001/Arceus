const Progress = (props) => {
  return (
    <div>
      <div className="mb-1 text-black font-semibold text-lg">{props.title}</div>
      <div className="w-full rounded-full h-7 mb-4 dark:bg-gray-300">
        <div
          className={`h-7 rounded-full ${props.className}`}
          style={{ width: props.percentage }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
