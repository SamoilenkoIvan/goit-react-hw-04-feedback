import PropTypes from 'prop-types';
import React from "react";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback percentage: {positivePercentage}%</p>
    </div>
  );
};
Statistics.prototype = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positive: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
export default Statistics;
