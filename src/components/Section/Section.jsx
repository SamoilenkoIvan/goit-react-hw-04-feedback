import PropTypes from 'prop-types';
import React from "react";

const Section = ({ title, children }) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default Section;
