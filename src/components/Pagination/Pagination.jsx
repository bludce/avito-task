import React from 'react';
import PropTypes from 'prop-types';

import './Pagination.sass'

const Pagination = ({totalPages, currentPage, changeCurrentPage}) => {

    const pages = []

    for (let i = 1; i <= 10; i++) {
      pages.push(i)
    }

    return (
      <ul className="pagination">
        <li onClick={() => {changeCurrentPage(1)}} className={`pagination__item pagination__item--first ${currentPage === 1 ? 'disabled' : ''}`}>
          {`<<`}
        </li>
        <li onClick={() => {changeCurrentPage(currentPage - 1)}} className={`pagination__item pagination__item--previous ${currentPage === 1 ? 'disabled' : ''}`}>
          {`<`}
        </li>
        {pages.map(page =>
          <li key={page} onClick={() => {changeCurrentPage(page)}} className={`pagination__item ${currentPage === page ? 'pagination__item--active' : ''}`}>
            {page}
          </li>
        )}
        <li onClick={() => {changeCurrentPage(currentPage + 1)}}  className={`pagination__item stars__item--next ${currentPage === totalPages ? 'disabled' : ''}`}>
          {`>`}
        </li>
        <li onClick={() => {changeCurrentPage(10)}} className={`pagination__item stars__item--last ${currentPage === totalPages ? 'disabled' : ''}`}>
          {`>>`}
        </li>
      </ul>
    );

}

Pagination.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  changeCurrentPage: PropTypes.func,
}

Pagination.defaultProps = {
  totalPages: 1,
  currentPage: 1,
  changeCurrentPage: () => {},
}

export default Pagination;