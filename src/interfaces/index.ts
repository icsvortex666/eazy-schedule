export interface HomeState {
  tableData: any[];
  currentDay: string;
  selectedTitle: string;
  selectedDescription: string;
  selectedDate: number;
  selectedTime: number;
}

export interface TableProps {
  tableEvents: any[];
  currentDay: string;
  dates: string[];
  onSelectedDate: (date: number) => void;
  onSelectedTime: (time: number) => void;
  onCreateEventButton: () => void;
}

export interface TableEventsProps {
  time: string;
  events: any[];
}

export interface EventProps {
  time: string;
  title: string;
  description: string;
}

export interface DateHeaderProps {
  date: string;
}

export interface TimeHeaderProps {
  time: string;
}

export interface ModalProps {
  title: string;
  description: string;
  date: number;
  time: number;
  dates: string[];
  hours: string[];
  onSelectedTitle: (title: string) => void;
  onSelectedDescription: (description: string) => void;
  onSelectedDate: (date: number) => void;
  onSelectedTime: (time: number) => void;
  onCreateEvent: (EventData: any) => void;
}

export interface IconHeaderProps {
  onCreateEventButton: () => void;
}
