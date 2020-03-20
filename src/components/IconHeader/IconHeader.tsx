import React, { FC } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import { IconHeaderProps } from 'interfaces';

const IconHeader: FC<IconHeaderProps> = ({ onCreateEventButton }) => (
  <th scope="col">
    <Icon
      icon={faPlusCircle}
      size="lg"
      className="add-event align-middle"
      data-toggle="modal"
      data-target="#modalEvent"
      onClick={onCreateEventButton}
    />
  </th>
);

export default IconHeader;
