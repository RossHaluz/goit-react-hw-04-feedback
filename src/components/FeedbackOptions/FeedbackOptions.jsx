import { OptionBtn } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) =>
  options.map(option => {
    return (
      <OptionBtn
        type="button"
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </OptionBtn>
    );
  });

FeedbackOptions.propType = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.number,
};

export default FeedbackOptions;
