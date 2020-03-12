import React, { FC } from 'react';

const Table: FC = () => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered">
        <caption>Total events: 7</caption>
        <thead className="thead-light text-center">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Sunday</th>
            <th scope="col">Monday</th>
            <th scope="col">Tuesday</th>
            <th scope="col">Wednesday</th>
            <th scope="col">Thursday</th>
            <th scope="col">Friday</th>
            <th scope="col">Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <th scope="row" className="text-center align-middle">1</th>
            <td>
              <p className="mb-0">Example Title</p>
              <small>Example description</small>
            </td>
            <td>
              <p className="mb-0">Example Title</p>
              <small>Example description</small>
            </td>
            <td>
              <p className="mb-0">Example Title</p>
              <small>Example description</small>
            </td>
            <td>
              <p className="mb-0">Example Title</p>
              <small>Example description</small>
            </td>
            <td>
              <p className="mb-0">Example Title</p>
              <small>Example description</small>
            </td>
            <td>
              <p className="mb-0">Example Title</p>
              <small>Example description</small>
            </td>
            <td>
              <p className="mb-0">Example Title</p>
              <small>Example description</small>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
