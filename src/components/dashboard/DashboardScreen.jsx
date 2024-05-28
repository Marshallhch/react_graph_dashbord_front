import React from 'react';
import Sales from './Sales';
import Visitors from './Visitors';
import TotalRevenue from './TotalRevenue';
import Customer from './Customer';

const DashboardScreen = () => {
  return (
    <div className="contents-area w-[calc(80%-28px)] ml-[calc(20%+14px)] mt-[14px]">
      <div className="area-row ar-one mt-[14px] grid grid-cols-[4fr_3fr] gap-x-[14px]">
        <Sales />
        <Visitors />
      </div>
      <div className="area-row ar-two grid grid-cols-[3fr_2fr_2fr]">
        <TotalRevenue />
        <Customer />
      </div>
    </div>
  );
};

export default DashboardScreen;
