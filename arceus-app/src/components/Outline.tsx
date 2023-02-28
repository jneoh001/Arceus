import * as React from "react";
import "./Outline.css";
const Outline = (props: {
  text: string,
  badges: {
    text: string,
  },
  className?: string,
}) => {
  return (
    <div className={`outline ${props.className || ""}`}>
      <span className="text">{props.text || " Register"}</span>
    </div>
  );
};
export default Outline;
