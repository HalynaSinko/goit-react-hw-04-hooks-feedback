import PropTypes from "prop-types";
import s from "./FeedbackOptions.module.css";

const FeedbackBtn = ({ feedbackName, onLeaveFeedback }) => (
  <button
    key={feedbackName}
    className={s.button}
    type="button"
    onClick={() => {
      onLeaveFeedback(feedbackName);
    }}
  >
    {feedbackName}
  </button>
);

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return options.map((option) =>
    FeedbackBtn({ feedbackName: option, onLeaveFeedback })
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// FeedbackBtn({ feedbackName: option, onLeaveFeedback })
// <FeedbackBtn feedbackName={option} onLeaveFeedback={onLeaveFeedback} />

// const FeedbackOptions = ({ options, onLeaveFeedback }) => {
//
//   return options.map((option) => {
//     return (
//       <FeedbackBtn
//         key={option}
//         feedbackName={option}
//         onLeaveFeedback={onLeaveFeedback}
//       />
//     );
//   });
// };
