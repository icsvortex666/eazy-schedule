import React, {
  FC,
  useState,
  FormEvent,
  ChangeEvent
} from 'react';

import { ModalProps } from 'interfaces';

const Modal: FC<ModalProps> = ({
  title: SelectedTitle,
  description: SelectedDescription,
  date: SelectedDate,
  time: SelectedTime,
  dates,
  hours,
  onSelectedTitle,
  onSelectedDescription,
  onSelectedDate,
  onSelectedTime,
  onCreateEvent,
}) => {
  const [eventData, setEventData] = useState({
    title: '',
    description: '',
    time: -1,
    date: -1,
  });

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const { currentTarget } = e;
    const { name, value } = currentTarget;

    switch (name) {
      case 'title':
        onSelectedTitle(String(value));
        setEventData(prevState => ({
          ...prevState,
          title: String(value),
        }));
        break;
      case 'description':
        onSelectedDescription(String(value));
        setEventData(prevState => ({
          ...prevState,
          description: String(value),
        }));
        break;
      case 'date':
        onSelectedDate(Number(value));
        setEventData(prevState => ({
          ...prevState,
          date: Number(value),
        }));
        break;
      case 'time':
        onSelectedTime(Number(value));
        setEventData(prevState => ({
          ...prevState,
          time: Number(value),
        }));
        break;
      default:
        break;
    }

    setEventData(prevState => ({
      ...prevState,
      value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    onCreateEvent(eventData);
  };

  return (
    <div
      id="modalEvent"
      className="modal fade"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="modalEventTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <form className="modal-content" onSubmit={handleSubmit}>
          <div className="modal-header border-bottom-0">
            <h5 id="modalEventTitle" className="modal-title">
              Create New Event
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body py-0">
            <div className="form-group">
              <label htmlFor="title" className="col-form-label text-dark">
                Title:
              </label>
              <input
                id="title"
                name="title"
                type="text"
                className="form-control bg-white border-secondary text-dark"
                placeholder="Enter an event title"
                onChange={(e: ChangeEvent<any>) => handleChange(e)}
                value={SelectedTitle}
                required
              />
            </div>
            <div className="form-row">
              <div className="form-group col-sm-6">
                <label htmlFor="date" className="text-dark">
                  Date
                </label>
                <select
                  id="date"
                  name="date"
                  className="form-control bg-white border-secondary text-dark"
                  onChange={(e: ChangeEvent<any>) => handleChange(e)}
                  value={SelectedDate}
                  required
                >
                  <option>Choose a Date...</option>
                  {dates.map((date: string, DateIdx: number) => (
                    <option key={DateIdx} value={DateIdx}>
                      {date}
                    </option>
                  ))}
                </select>
              </div>

              <div className="form-group col-sm-6">
                <label htmlFor="time" className="text-dark">
                  Time
                </label>
                <select
                  id="time"
                  name="time"
                  className="form-control bg-white border-secondary text-dark"
                  onChange={(e: ChangeEvent<any>) => handleChange(e)}
                  value={SelectedTime}
                  required
                >
                  <option>Choose a Time...</option>
                  {hours.map((time: string, TimeIdx: number) => (
                    <option key={TimeIdx} value={TimeIdx}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="form-group">
              <label
                htmlFor="description"
                className="col-form-label text-dark"
              >
                Description:
              </label>
              <textarea
                id="description"
                name="description"
                className="form-control bg-white border-secondary text-dark"
                placeholder="Enter an event description"
                onChange={(e: ChangeEvent<any>) => handleChange(e)}
                value={SelectedDescription}
              />
            </div>
          </div>
          <div className="modal-footer border-top-0 pt-0">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="submit"
              className="btn btn-primary"
            >
              Save changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
