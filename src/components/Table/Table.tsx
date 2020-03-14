import React, { FC, MouseEvent } from 'react';
import CN from 'classnames';

import {
  IconHeader,
  TimeHeader,
  DateHeader,
  Event
} from 'components';

import {
  TableProps,
  TableEventsProps,
  EventProps
} from 'interfaces';

const Table: FC<TableProps> = ({
  table,
  currentDay,
  dates,
  onSelectedDate,
  onSelectedTime,
}) => {
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

  const handleClickEvent = (
    e: MouseEvent<HTMLTableDataCellElement>,
    DateIdx: number,
    TimeIdx: number
  ) => {
    e.preventDefault();
    onSelectedDate(DateIdx);
    onSelectedTime(TimeIdx);
  };

  const tableBody = (
    <tbody>
      {table.map(({ time, events }: TableEventsProps, TimeIdx: number) => (
        <tr key={TimeIdx}>
          <TimeHeader time={time} />
          {events.map((event: any[], DateIdx: number) => (
            <td
              key={DateIdx}
              data-toggle="modal"
              data-target="#modalEvent"
              title={`${dates[DateIdx]} - ${time}`}
              className={CN({ today: currentDay === dates[DateIdx] })}
              onClick={
                (e: MouseEvent<HTMLTableDataCellElement>) => {
                  handleClickEvent(e, DateIdx, TimeIdx);
                }
              }
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
