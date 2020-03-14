export interface HomeState {
  tableData: any[];
  currentDay: string;
  selectedDate: any;
  selectedTime: any;
}

export interface TableProps {
  table: any[];
  currentDay: string;
  dates: string[];
  onSelectedDate: (date: number) => void;
  onSelectedTime: (time: number) => void;
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
  date: number;
  time: number;
  dates: string[];
  hours: string[];
  onSelectedDate: (date: number) => void;
  onSelectedTime: (time: number) => void;
  onResetSelects: () => void;
}
