import PropTypes from 'prop-types';

import { memo } from 'react';
import { Container } from './styles';

import xCircleIcon from '../../../assets/images/icon/x-circle.svg';
import checkCircleIcon from '../../../assets/images/icon/check-circle.svg';

import useToastMessage from './useToastMessage';

function ToastMessage({
  message, onRemoveMessage, isLeaving, animatedRef,
}) {
  const {
    handleRemoveToast,
  } = useToastMessage(message, onRemoveMessage);

  return (
    <Container
      type={message.type}
      onClick={handleRemoveToast}
      tabIndex={0}
      role="button"
      isLeaving={isLeaving}
      ref={animatedRef}
    >
      {message.type === 'danger' && <img src={xCircleIcon} alt="X" />}
      {message.type === 'success' && <img src={checkCircleIcon} alt="Check" />}
      <strong>{message.text}</strong>
    </Container>
  );
}

ToastMessage.propTypes = {
  message: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['default', 'success', 'danger']),
    duration: PropTypes.number,
  }).isRequired,
  isLeaving: PropTypes.bool.isRequired,
  onRemoveMessage: PropTypes.func.isRequired,
  animatedRef: PropTypes.shape().isRequired,
};

export default memo(ToastMessage);
