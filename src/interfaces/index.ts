export interface HomeState {
  tableData: any[];
}

export interface TableProps {
  dates: any[];
  table: any[];
}

export interface EventProps {
  title: string;
  description: string;
}

export interface DateHeaderProps {
  date: string;
}

export interface TimeHeaderProps {
  time: string;
}
