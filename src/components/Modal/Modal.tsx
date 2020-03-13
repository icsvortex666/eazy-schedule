import React, { FC } from 'react';

const Modal: FC = () => (
  <div
    className="modal fade"
    id="modalEvent"
    tabIndex={-1}
    role="dialog"
    aria-labelledby="modalEventTitle"
    aria-hidden="true"
  >
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header border-bottom-0">
          <h5 className="modal-title" id="modalEventTitle">
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
        <div className="modal-body">...</div>
        <div className="modal-footer border-top-0">
          <button
            type="button"
            className="btn btn-secondary"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default Modal;
