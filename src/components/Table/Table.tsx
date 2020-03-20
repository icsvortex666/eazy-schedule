import React, { FC, MouseEvent } from 'react';
import CN from 'classnames';

import {
  IconHeader,
  Event
} from 'components';

import {
  TableProps,
  TableEventsProps,
  EventProps
} from 'interfaces';

const Table: FC<TableProps> = ({
  tableEvents,
  currentDay,
  dates,
  onSelectedDate,
  onSelectedTime,
  onCreateEventButton,
}) => {
  const tableHead = (
    <thead className="thead-light text-center">
      <tr>
        <IconHeader onCreateEventButton={onCreateEventButton} />
        {dates.map((date: string, DatesIdx: number) => (
          <th
            key={DatesIdx}
            scope="col"
            title={date}
          >
            {date}
          </th>
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
      {tableEvents.map(({ time, events }: TableEventsProps, TimeIdx: number) => (
        <tr key={TimeIdx}>
          <th
            scope="row"
            title={time}
            className="text-center align-middle"
          >
            {time}
          </th>
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
                      count={event.length}
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
