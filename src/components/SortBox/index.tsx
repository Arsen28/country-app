import React, { ChangeEvent, FC } from "react";
import "./style.css";

interface SortBoxProps {
  handler: (sortId: string) => void;
}

const SortBox: FC<SortBoxProps> = ({ handler }) => {
  const sorts = [
    {
      name: "Sort by population",
      id: "population"
    },
    {
      name: "Sort by area",
      id: "area"
    }
  ];

  const onHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    handler(event.target.value);
  };

  return (
    <>
      <select onChange={onHandler}>
        <option value="none" key={"none"}>
          No sort
        </option>
        {sorts?.map((sort, index) => (
          <option value={sort.id} key={index}>
            {sort.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default SortBox;
