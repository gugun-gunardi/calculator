import React from 'react';
import Calculator from '../../organisms/Calculator';

const AppTemplate = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
      }}
    >
      <Calculator />
    </div>
  );
};

export default AppTemplate;
