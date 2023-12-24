import React from "react";

const Accordion = ({ title, content, id }) => {
  return (
    <div className="accordion accordion-flush" id={`"assign-${id}"`}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#flush-collapse${id}`}
          >
            <i className="fa-solid fa-star me-2" /> {title}
          </button>
        </h2>
        <div
          id={`flush-collapse${id}`}
          className="accordion-collapse collapse"
          data-bs-parent={`#assign-${id}`}
        >
          <div
            className="accordion-body"
            style={{
              backgroundColor: "#f4f4f4",
            }}
          >
            {content}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accordion;
