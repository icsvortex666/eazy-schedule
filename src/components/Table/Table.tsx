import React, { FC } from 'react';

import { TableProps } from 'interfaces';

const Table: FC<TableProps> = ({ table, dates }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="thead-light text-center">
          <tr>
            <th scope="col">#</th>
            {dates.map((date, idx) => (
              <th key={idx} scope="col" title={date}>
                {date}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {table.map(({ time, events }, t) => (
            <tr key={t}>
              <th scope="row" className="text-center align-middle">
                {time}
              </th>
              {events.map(
                (
                  {
                    title,
                    description
                  }: {
                    title: string;
                    description: string;
                  },
                  d: number
                ) => (
                  <td key={d} title={`${dates[d]} - ${time}`}>
                    <p className="mb-0">{title}</p>
                    <small>{description}</small>
                  </td>
                )
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
