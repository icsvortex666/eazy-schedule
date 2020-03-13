export interface HomeState {
  tableData: any[];
}

export interface TableProps {
  dates: string[];
  table: any[];
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
  dates: string[];
  hours: string[];
}
