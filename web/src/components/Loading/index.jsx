import React from "react";
import classes from "./index.module.css";

const Loading = () => {
  return (
    <svg className={classes.svg} viewBox="25 25 50 50">
      <circle
        className={classes.circle}
        cx="50"
        cy="50"
        r="20"
        fill="none"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default Loading;
