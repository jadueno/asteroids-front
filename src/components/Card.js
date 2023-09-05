import React from "react";
import PropTypes from "prop-types";

export const Card = ({ title, subtitle }) => {
  return (
    <div className="shadow rounded-lg border-gray-200 bg-white p-4 text-center">
      <h3 className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
        {title}
      </h3>
      <h4 className="text-2xl font-bold leading-8 tracking-tight">
        {subtitle}
      </h4>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.any,
};
