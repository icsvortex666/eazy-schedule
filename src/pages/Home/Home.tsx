import React, { Component } from 'react';
// import update from 'immutability-helper';

import {
  Main,
  Navbar,
  Table,
  Modal
} from 'components';

import {
  hoursGenerator,
  datesGenerator,
  tableGenerator
} from 'generators';

import { HomeState } from 'interfaces';

import { dateWithFormat } from 'helpers';

export default class Home extends Component<HomeState> {
  public hoursList: Array<string> = [];

  public datesList: Array<string> = [];

  public currentDate: Date = new Date();

  state = {
    tableData: [],
    currentDay: dateWithFormat(this.currentDate),
    selectedDate: -1,
    selectedTime: -1,
  }

  componentDidMount() {
    this.generateEventsGrid();
  }

  public setSelectedDate(DateIdx: number) {
    this.setState({ selectedDate: DateIdx });
  }

  public setSelectedTime(TimeIdx: number) {
    this.setState({ selectedTime: TimeIdx });
  }

  public generateEventsGrid() {
    this.hoursList = hoursGenerator();
    this.datesList = datesGenerator(this.currentDate);
    this.setState({ tableData: tableGenerator(this.hoursList) });
  }

  render() {
    const {
      tableData,
      selectedDate,
      selectedTime,
      currentDay,
    } = this.state;

    return (
      <>
        <Navbar />
        <Main>
          <Table
            tableEvents={tableData}
            currentDay={currentDay}
            dates={this.datesList}
            onSelectedDate={(DateIdx) => this.setSelectedDate(DateIdx)}
            onSelectedTime={(TimeIdx) => this.setSelectedTime(TimeIdx)}
          />
          <Modal
            date={selectedDate}
            time={selectedTime}
            dates={this.datesList}
            hours={this.hoursList}
            onSelectedDate={(DateIdx) => this.setSelectedDate(DateIdx)}
            onSelectedTime={(TimeIdx) => this.setSelectedTime(TimeIdx)}
          />
        </Main>
      </>
    );
  }
}
