import { useEffect, useState } from "react";
import "./style.css";

import Table from "../components/Table";
import SearchBox from "../components/SearchBox";
import FilterBox from "../components/FilterBox";
import SortBox from "../components/SortBox";

import { fetchData } from "./../services";

type Country = {
  name: {
    common: string;
  };
  region: string;
  flag: string;
};

export default function Country() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [rows, setRows] = useState<Country[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filter, setFilter] = useState<string>("none");
  const [sort, setSort] = useState<string>("none");

  useEffect(() => {
    fetchData().then((response) => {
      const data: Country[] = response.data;

      setCountries(data);
      setRows(data);
    });
  }, []);

  useEffect(() => {
    let temp = [...countries];

    if (temp) {
      if (search) {
        temp = countries.filter(
          (country: { name: { common: string | any[] } }) =>
            country.name.common.indexOf(search) > -1
        );
      }

      if (filter !== "none") {
        temp = temp.filter((country) => country.region === filter);
      }

      if (sort !== "none") {
        temp.sort(function (a, b) {
          if (a[sort] < b[sort]) return 1;
          if (a[sort] > b[sort]) return -1;

          return 0;
        });
      }

      setRows(temp);
    }
  }, [filter, search, sort, countries]);

  const remove = (flag: string) => {
    setCountries(
      countries.filter((country: { flag: string }) => flag !== country.flag)
    );
  };

  return (
    <>
      <div className="header">
        <SearchBox handler={(search: string) => setSearch(search)} />
        <FilterBox handler={(filter: string) => setFilter(filter)} />
        <SortBox handler={(sort: string) => setSort(sort)} />
      </div>
      <Table rows={rows} removeHandler={remove} />
    </>
  );
}
