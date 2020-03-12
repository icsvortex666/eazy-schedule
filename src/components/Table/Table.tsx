import React, { FC } from 'react';
import CN from 'classnames';

import { TableProps, EventProps } from 'interfaces';

import {
  IconHeader,
  TimeHeader,
  DateHeader
} from 'components';

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
            <IconHeader />
            {dates.map((date, idx) => (
              <DateHeader key={idx} date={date} />
            ))}
          </tr>
        </thead>

        <tbody>
          {table.map(({ time, events }, t) => (
            <tr key={t}>
              <TimeHeader time={time} />
              {events.map((event: any, d: number) => (
                <td
                  key={d}
                  title={`${dates[d]} - ${time}`}
                  className={CN({
                    today: currentDay === dates[d]
                  })}
                >
                  <div className="row">
                    {event.map(
                      ({ title, description }: EventProps, idx: number) => (
                        <div key={idx} className="col event px-1">
                          <small className="text-secondary">{time}</small>
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
