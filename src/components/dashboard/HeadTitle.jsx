import React from 'react';

const HeadTitle = (props) => {
  return (
    <div className="block-head">
      <div className="block-title mt-1">
        <h3 className="text-xl font-bold">{props.title}</h3>
      </div>
    </div>
  );
};

export default HeadTitle;
