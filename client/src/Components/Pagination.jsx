import React from "react";

export const Pagination = ({ prev, next, onPrevius, onNext }) => {

  
  const handlePrevuis = () => {
    onPrevius();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className="pagination justify-content-center">
        {prev ? (
          <li className="page-item">
            <button className="page-link" onClick={handlePrevuis}>
              Previus
            </button>
          </li>
        ) : null}
        {next ? (
          <li className="page-item">
            <button className="page-link" onClick={handleNext}>
              Next
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};
