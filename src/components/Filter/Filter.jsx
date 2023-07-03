import React from 'react';
import css from 'components/Filter/Filter.module.css'
// import PropTypes from 'prop-types';
import { useRef } from 'react';
import { useSelector } from 'react-redux';

function Filter(props) {
  // const { filter, onFilterChange } = props;
  const contacts = useSelector(state => state.contacts);
  console.log(contacts);

  const filterNameRef = useRef();

  return (
      <div className={css.FilterContainer}>
        <p className={css.FindContactsText}>Find contacts by name</p>
        <input
          className={css.InputFilter}
          type="text"
          placeholder="filter"
        //   onChange={onFilterChange}
        // value={filter}
        ref={filterNameRef}
        />
      </div>
    );
}

// Filter.propTypes = {
//   filter: PropTypes.string.isRequired,
//   onFilterChange: PropTypes.func.isRequired
// }
export default Filter;
