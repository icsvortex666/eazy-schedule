import React, { Component } from 'react';

import {
  Main,
  Navbar,
  Table,
  Modal
} from 'components';

export default class Home extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Main>
          <Table />
          <Modal />
        </Main>
      </>
    );
  }
}
