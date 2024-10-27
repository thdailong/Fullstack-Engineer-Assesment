import React from "react";
import classes from "./styles/RowRepo.module.css";

const RowRepo = ({ repo, onClickLanguage, onClickRepo }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title} onClick={onClickRepo}>
        {repo?.name}
      </h3>
      {repo?.description && <div>Description: {repo?.description}</div>}
      {repo?.language && (
        <div>
          Language:
          <span onClick={onClickLanguage} className={classes.language}>
            {repo?.language}
          </span>
        </div>
      )}
      <div>Forks counts: {repo?.forks}</div>
    </div>
  );
};

export default RowRepo;
