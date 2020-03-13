import React, { FC } from 'react';

import { DateHeaderProps } from 'interfaces';

const DateHeader: FC<DateHeaderProps> = ({ date }) => (
  <th
    scope="col"
    title={date}
  >
    {date}
  </th>
);

export default DateHeader;
