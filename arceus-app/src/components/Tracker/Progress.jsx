const Progress = (props) => {
  return (
    <div>
      <div className="mb-1 text-black font-semibold text-lg">{props.title}</div>
      <div className="w-full rounded-full h-7 bg-gray-700 ">
        <div
          className={`h-7  text-center font-semibold text-gray-800 rounded-full bg-gradient-to-r ${props.className}`}
          style={{ width: props.percentage }}
        >
          {props.percentage !== "0%" && props.percentage}
        </div>
      </div>
    </div>
  );
};

export default Progress;
