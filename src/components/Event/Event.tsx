import React, { FC } from 'react';

import { EventProps } from 'interfaces';

const Event: FC<EventProps> = ({
  time,
  title,
  description,
}) => (
  <div className="col event px-1">
    <small className="text-secondary">{time}</small>
    <p className="mb-0">{title}</p>
    <small>{description}</small>
  </div>
);

export default Event;
