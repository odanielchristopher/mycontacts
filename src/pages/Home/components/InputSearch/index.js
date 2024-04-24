import Proptypes from 'prop-types';

import { Container } from './styles';

export default function InputSearch({ value, onChange }) {
  return (
    <Container>
      <input
        value={value}
        type="text"
        placeholder="Pesquise pelo nome..."
        onChange={onChange}
      />
    </Container>
  );
}

InputSearch.propTypes = {
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
};
