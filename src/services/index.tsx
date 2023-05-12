import axios from "axios";

export function fetchData() {
  return axios.get(
    "https://restcountries.com/v3.1/all?fields=name,region,population,flags,area,flag"
  );
}
