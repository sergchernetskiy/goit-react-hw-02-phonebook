import PropTypes from 'prop-types';
import { Input, Label } from './StyledFilter';

export const Filter = ({ value, onChangeFilter }) => {
  return (
    <Label htmlFor="filterId">
      Find contacts by name
      <Input
        id="filterId"
        type="text"
        name="filter"
        value={value}
        onChange={onChangeFilter}
        placeholder="Search"
      />
    </Label>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
