import React, { FC } from 'react';
import CN from 'classnames';

import { TableProps, EventProp } from 'interfaces';

const Table: FC<TableProps> = ({ table, dates }) => {
  const currentDay = new Date()
    .toDateString()
    .replace(/\d{4}$/, '')
    .replace(' ', ', ')
    .trimEnd();

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <thead className="thead-light text-center">
          <tr>
            <th scope="col" />
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
              {events.map((event: any, d: number) => (
                <td
                  key={d}
                  title={`${dates[d]} - ${time}`}
                  className={CN({
                    'today': currentDay === dates[d]
                  })}
                >
                  <div className="row">
                    {event.map(
                      ({ title, description }: EventProp, idx: number) => (
                        <div key={idx} className="col">
                          <p className="mb-0">{title}</p>
                          <small>{description}</small>
                        </div>
                      )
                    )}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
