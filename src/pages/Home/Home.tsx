import React, { Component } from 'react';
import update from 'immutability-helper';

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
    selectedTitle: '',
    selectedDescription: '',
    selectedDate: -1,
    selectedTime: -1,
  }

  componentDidMount() {
    this.generateEventsGrid();
  }

  public setSelectedTitle = (title: string) => {
    this.setState({ selectedTitle: title });
  }

  public setSelectedDescription = (description: string) => {
    this.setState({ selectedDescription: description });
  }

  public setSelectedDate = (DateIdx: number) => {
    this.setState({ selectedDate: DateIdx });
  }

  public setSelectedTime = (TimeIdx: number) => {
    this.setState({ selectedTime: TimeIdx });
  }

  public createEvent = (EventData: any) => {
    const { title, description } = EventData;
    const {
      tableData,
      selectedDate,
      selectedTime,
    } = this.state;

    this.setState(prevState => {
      const eventsList: any[] = tableData;

      return {
        ...prevState,
        tableData: update(eventsList, {
          [selectedTime]: {
            events: {
              [selectedDate]: {
                $push: [
                  {
                    title,
                    description,
                  },
                ],
              },
            },
          },
        }),
      };
    });
  }

  // public updateEvent = (EventData: any) => {
  //   const {
  //     id,
  //     title,
  //     description,
  //   } = EventData;
  //   const {
  //     tableData,
  //     selectedDate,
  //     selectedTime,
  //   } = this.state;

  //   this.setState(prevState => {
  //     const eventsList: any[] = tableData;

  //     return {
  //       ...prevState,
  //       tableData: update(eventsList, {
  //         [selectedTime]: {
  //           events: {
  //             [selectedDate]: {
  //               [id]: {
  //                 $set: [
  //                   {
  //                     title,
  //                     description,
  //                   },
  //                 ],
  //               },
  //             },
  //           },
  //         },
  //       }),
  //     };
  //   });
  // }

  public generateEventsGrid = () => {
    this.hoursList = hoursGenerator();
    this.datesList = datesGenerator(this.currentDate);
    this.setState({ tableData: tableGenerator(this.hoursList) });
  }

  public resetEventsState = () => {
    this.setState(prevState => ({
      ...prevState,
      selectedTitle: '',
      selectedDescription: '',
      selectedDate: -1,
      selectedTime: -1,
    }));
  }

  render() {
    const {
      tableData,
      selectedTitle,
      selectedDescription,
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
            onCreateEventButton={() => this.resetEventsState()}
          />
          <Modal
            date={selectedDate}
            time={selectedTime}
            title={selectedTitle}
            description={selectedDescription}
            dates={this.datesList}
            hours={this.hoursList}
            onSelectedTitle={(title) => this.setSelectedTitle(title)}
            onSelectedDescription={(description) => this.setSelectedDescription(description)}
            onSelectedDate={(DateIdx) => this.setSelectedDate(DateIdx)}
            onSelectedTime={(TimeIdx) => this.setSelectedTime(TimeIdx)}
            onCreateEvent={(EventData) => this.createEvent(EventData)}
          />
        </Main>
      </>
    );
  }
}
