import React, { FC } from 'react';

import { EventProps } from 'interfaces';

const Event: FC<EventProps> = ({
  count,
  time,
  title,
  description,
}) => (
  <div className="col event px-1">
    {count < 5 && (
      <>
        <span className="text-secondary">{time}</span>
        <p className="mb-0">{title}</p>
        <span>{description}</span>
      </>
    )}
  </div>
);

export default Event;
