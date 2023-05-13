import { useEffect, useState } from "react";
import "./style.css";

type RowType = {
  name: { common: string };
  region: string;
  population: number;
  area: number;
  flag: string;
  flags: { png: string; alt: string };

};

type Props = {
  rows: RowType[];
  removeHandler: (flag: string) => void;
};

export default function Table({ rows, removeHandler }: Props): JSX.Element {
  const [data, setData] = useState<RowType[]>([]);

  useEffect(() => {
    setData(rows.slice(0, 40));
  }, [rows]);

  return (
    <>
      <div>
        <table border={1}>
          <thead>
            <tr>
              <th>Country Name</th>
              <th>Region</th>
              <th>Population</th>
              <th>Area</th>
              <th>Flag</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data?.map((row: RowType, index: number) => {
              return (
                <tr key={index}>
                  <td>{row?.name.common}</td>
                  <td>{row?.region}</td>
                  <td>{row?.population}</td>
                  <td>{row?.area}</td>
                  <td>
                    <img
                      src={row?.flags.png}
                      width={"32"}
                      alt={row?.flags.alt}
                    />
                  </td>
                  <td>
                    <button onClick={() => removeHandler(row?.flag)}>
                     X
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
