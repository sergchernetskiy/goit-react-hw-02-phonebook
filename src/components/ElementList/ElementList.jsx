import PropTypes from 'prop-types';
import { AiOutlineRest } from 'react-icons/ai';
import { Button, Text, Circle, ElementList } from './StyledElementList';

export const ElementListContacts = ({ id, name, number, onDelete }) => {
  return (
    <ElementList>
      <Circle></Circle>
      <Text>
        {name}: {number}
      </Text>
      <Button type="button" onClick={() => onDelete(id)}>
        <AiOutlineRest />
      </Button>
    </ElementList>
  );
};

ElementListContacts.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
