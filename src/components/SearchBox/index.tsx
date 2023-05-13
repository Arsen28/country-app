import React, { ChangeEvent, FC } from "react";
import "./style.css";

interface SearchBoxProps {
  handler: (searchText: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({ handler }) => {
  const onHandler = (event: ChangeEvent<HTMLInputElement>) => {
    handler(event.target.value);
  };

  return (
    <>
      <input onChange={onHandler} placeholder="Search" />
    </>
  );
};

export default SearchBox;
