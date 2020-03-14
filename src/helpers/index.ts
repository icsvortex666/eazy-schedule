export const dateWithFormat = (currentDate: Date) => new Date(currentDate)
  .toDateString()
  .replace(/\d{4}$/, '')
  .replace(' ', ', ')
  .trimEnd();
