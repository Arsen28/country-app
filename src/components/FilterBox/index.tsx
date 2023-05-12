import "./style.css";
import React, { FC, ChangeEvent } from "react";

interface FilterBoxProps {
  handler: (filter: string) => void;
}

const FilterBox: FC<FilterBoxProps> = ({ handler }) => {
  const regions: string[] = ["Africa", "Asia", "Americas", "Europe", "Oceania"];

  const onHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    handler(event.target.value);
  };

  return (
    <>
      <select onChange={onHandler}>
        <option value="none" key={"none"}>
          All Regions
        </option>
        {regions?.map((region, index) => (
          <option value={region} key={index}>
            {region}
          </option>
        ))}
      </select>
    </>
  );
};

export default FilterBox;
