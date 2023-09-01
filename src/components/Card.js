import React from "react";

export const Card = ({ title, subtitle }) => {
  return (
    <div class="shadow rounded-lg border-gray-200 bg-white p-4 text-center">
      <h3 class="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
        {title}
      </h3>
      <h4 class="text-2xl font-bold leading-8 tracking-tight">{subtitle}</h4>
    </div>
  );
};
