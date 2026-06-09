import React from 'react';

export const SectionTitle = ({ title, subtitle }) => {
  return (
    <div>
      {subtitle && <span>{subtitle}</span>}
      <h2>{title}</h2>
    </div>
  );
};

export default SectionTitle;
