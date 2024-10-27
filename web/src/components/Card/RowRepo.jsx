import React from "react";
import classes from "./styles/RowRepo.module.css";

const RowRepo = ({ repo, onClickLanguage }) => {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>{repo?.name}</h3>
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
