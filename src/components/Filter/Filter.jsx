import PropTypes from 'prop-types';

import { FilterLabel, FilterValue } from './Filter.styled';

const Filter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <br />
      <FilterValue
        type="text"
        name="filter"
        value={filter}
        onChange={onChange}
      />
    </FilterLabel>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
