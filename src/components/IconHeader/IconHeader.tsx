import React, { FC } from 'react';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

const IconHeader: FC = () => (
  <th scope="col">
    <Icon
      icon={faPlusCircle}
      size="lg"
      className="add-event align-middle"
    />
  </th>
);

export default IconHeader;
