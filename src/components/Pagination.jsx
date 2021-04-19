import React from 'react';
import PropTypes from 'prop-types';

const Pagination = ({ castsPerPage, totalCasts, getPaginate }) => {
  const pageNumbers = [];
  const pageCount = Math.ceil(totalCasts / castsPerPage);
  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= pageCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers && pageNumbers.map((pageNumber) => (
          <li className="page-item" key={pageNumber}>
            <button type="button" className="page-link" onClick={() => getPaginate(pageNumber)}>
              {pageNumber}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Pagination.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  castsPerPage: PropTypes.number.isRequired,
  totalCasts: PropTypes.number.isRequired,
  getPaginate: PropTypes.func.isRequired,
};
export default Pagination;
