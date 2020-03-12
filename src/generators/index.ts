export const hoursGenerator = () =>
  Array.from(Array(24), (_, idx) => (idx < 10 ? `0${idx}:00` : `${idx}:00`));

export const datesGenerator = () => {
  const datesList: Array<string> = [];
  const currentDate: Date = new Date();

  currentDate.setDate(currentDate.getDate() - currentDate.getDay());

  for (let i = 0; i < 7; i += 1) {
    const dateWithFormat = new Date(currentDate)
      .toDateString()
      .replace(/\d{4}$/, '')
      .replace(' ', ', ')
      .trimEnd();
    datesList.push(dateWithFormat);
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return datesList;
};

export const tableGenerator = (hoursList: Array<string>) => {
  return Array.from(Array(24), (_, idx) => ({
    time: hoursList[idx],
    events: Array.from(Array(7), () => [])
  }));
};
