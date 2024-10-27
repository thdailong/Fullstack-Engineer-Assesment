import React, { useEffect, useMemo, useState } from "react";
import { getRepoData } from "../../rest-client/apiClient";
import classes from "./styles/CardRepo.module.css";
import Layout from "../layout";
import RowRepo from "./RowRepo";
import BtnFilterByLanguages from "../Button/BtnFilterByLanguages";

const CardRepo = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filterLanguage, setFilterLanguage] = useState("All");

  const fetchData = async () => {
    setIsLoading(true);
    const { data } = await getRepoData();
    setData(data);
    setIsLoading(false);
  };

  const languages = useMemo(() => {
    const _languagesInData = data
      ?.filter((r) => r?.language)
      ?.map((r) => r.language);
    // filter duplicates
    const _languages = ["All", ...new Set(_languagesInData)];
    return _languages.map((l) => ({ label: l, value: l }));
  }, [data]);

  const filteredData = useMemo(() => {
    const _dataSorted = data?.sort(
      (a, b) => new Date(b?.created_at) - new Date(a?.created_at)
    );
    if (filterLanguage === "All") return _dataSorted;
    return _dataSorted?.filter((r) => r?.language === filterLanguage);
  }, [data, filterLanguage]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Layout>
      <div className={classes.header}>
        <h1 className={classes.title}>All repositories from freeCodeCamp</h1>
        <div>
          Filter by Language:
          <BtnFilterByLanguages
            value={filterLanguage}
            onChange={(e) => {
              setFilterLanguage(e.target.value);
            }}
            options={languages}
          />
        </div>
      </div>
      {filteredData?.map((repo) => (
        <RowRepo
          repo={repo}
          key={repo?.id}
          onClickLanguage={() => {
            setFilterLanguage(repo?.language);
          }}
        />
      ))}
    </Layout>
  );
};

export default CardRepo;