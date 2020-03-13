import React, { FC } from 'react';
import CN from 'classnames';

import {
  TableProps,
  TableEventsProps,
  EventProps
} from 'interfaces';

import {
  IconHeader,
  TimeHeader,
  DateHeader,
  Event
} from 'components';

const Table: FC<TableProps> = ({ table, dates }) => {
  const currentDay = new Date()
    .toDateString()
    .replace(/\d{4}$/, '')
    .replace(' ', ', ')
    .trimEnd();

  const tableHead = (
    <thead className="thead-light text-center">
      <tr>
        <IconHeader />
        {dates.map((date: string, DatesIdx: number) => (
          <DateHeader
            key={DatesIdx}
            date={date}
          />
        ))}
      </tr>
    </thead>
  );

  const tableBody = (
    <tbody>
      {table.map(({ time, events }: TableEventsProps, TimeIdx: number) => (
        <tr key={TimeIdx}>
          <TimeHeader time={time} />
          {events.map((event: any[], DateIdx: number) => (
            <td
              key={DateIdx}
              title={`${dates[DateIdx]} - ${time}`}
              className={CN({ today: currentDay === dates[DateIdx] })}
            >
              <div className="row">
                {event.map(
                  ({ title, description }: EventProps, EventIdx: number) => (
                    <Event
                      key={EventIdx}
                      time={time}
                      title={title}
                      description={description}
                    />
                  )
                )}
              </div>
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );

  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        {tableHead}
        {tableBody}
      </table>
    </div>
  );
};

export default Table;
