import React, { Component } from 'react';

import {
  Main,
  Navbar,
  Table,
  Modal
} from 'components';

import { HomeState } from 'interfaces';

import {
  hoursGenerator,
  datesGenerator,
  tableGenerator
} from 'generators';

export default class Home extends Component<HomeState> {
  public hoursList: Array<string> = [];

  public datesList: Array<string> = [];

  state = { tableData: [] }

  componentDidMount() {
    this.generateEventsGrid();
  }

  public generateEventsGrid() {
    this.hoursList = hoursGenerator();
    this.datesList = datesGenerator();

    const table = tableGenerator(this.hoursList);

    this.setState({ tableData: table });
  }

  render() {
    const { tableData } = this.state;

    return (
      <>
        <Navbar />
        <Main>
          <Table
            dates={this.datesList}
            table={tableData}
          />
          <Modal
            dates={this.datesList}
            hours={this.hoursList}
          />
        </Main>
      </>
    );
  }
}
