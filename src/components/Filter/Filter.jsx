import React from 'react';
import css from 'components/Filter/Filter.module.css'
import PropTypes from 'prop-types';

function Filter(props) {
  const { filter, onFilterChange } = props;

  return (
      <div className={css.FilterContainer}>
        <p className={css.FindContactsText}>Find contacts by name</p>
        <input
          className={css.InputFilter}
          type="text"
          placeholder="filter"
          onChange={onFilterChange}
          value={filter}
        />
      </div>
    );
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired
}
export default Filter;
