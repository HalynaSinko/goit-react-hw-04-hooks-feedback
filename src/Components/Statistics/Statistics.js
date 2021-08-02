import PropTypes from "prop-types";

import Notification from "../Notification";
import s from "./Statistics.module.css";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <>
      {total > 0 && (
        <ul className={s.list}>
          <li className={s.item}>good: {good}</li>
          <li className={s.item}>neutral: {neutral}</li>
          <li className={s.item}>bad: {bad}</li>
          <li className={s.item}>total: {total}</li>
          <li className={s.item}>Positive feedback: {positivePercentage}%</li>
        </ul>
      )}
      {total === 0 && <Notification message="No feedback given"></Notification>}
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
