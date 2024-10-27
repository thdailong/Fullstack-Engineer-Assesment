import React, { useEffect, useState } from "react";
import { getCommits } from "../../rest-client/apiClient";
import RowRepo from "./RowRepo";
import classes from "./styles/RepoSelected.module.css";
import Loading from "../Loading";

const RepoSelected = ({ repo, onBack }) => {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCommits = async () => {
    try {
      setLoading(true);
      const { data } = await getCommits(repo?.name);
      console.log(data);
      setCommits(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (repo?.name) {
      fetchCommits(repo?.name);
    }
  }, [repo]);

  const firstCommit = commits?.[0];

  return (
    <div className={classes.container}>
      <button onClick={onBack} className={classes.btn}>
        Back
      </button>
      <RowRepo repo={repo} />
      {loading && <Loading />}
      {!loading && (
        <>
          <div className={classes["title-commit"]}>Most recent commit</div>
          <div className={classes["commit-info"]}>
            <div>
              Author:
              <span className={classes.value}>
                {firstCommit?.commit?.author?.name}
              </span>
            </div>
            <div>
              Message:
              <span className={classes.value}>
                {firstCommit?.commit?.message}
              </span>
            </div>
            <div>
              Date:{" "}
              <span className={classes.value}>
                {new Date(
                  firstCommit?.commit?.committer?.date
                )?.toLocaleString()}
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default RepoSelected;
