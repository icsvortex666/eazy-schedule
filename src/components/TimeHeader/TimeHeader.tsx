import React, { FC } from 'react';

import { TimeHeaderProps } from 'interfaces';

const TimeHeader: FC<TimeHeaderProps> = ({ time }) => (
  <th scope="row" title={time} className="text-center align-middle">
    {time}
  </th>
);

export default TimeHeader;
