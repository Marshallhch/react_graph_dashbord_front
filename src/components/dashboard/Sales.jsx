import React from 'react';
import HeadTitle from './HeadTitle';
import { Icons } from '../../assets/icons';
import { SALES_LISTS } from '../arrayLists/menuLists';

const Sales = () => {
  return (
    <div className="block-wrap">
      <div className="block-head flex items-baseline justify-between flex-wrap">
        <HeadTitle title="Today's Sales" />
        <div className="block-head-export">
          <button
            type="button"
            className="exoprt-btn flex items-center gap-x-[6px] h-8 border border-solid border-gray-500 rounded-lg py-[2px] px-2 font-semibold"
          >
            <img
              src={Icons.ExportDark}
              alt=""
              className="invert-[1] brightness-[100%]"
            />
            <span className="text">Export</span>
          </button>
        </div>
      </div>
      <div className="cards grid grid-cols-4 gap-4 mt-6">
        {SALES_LISTS.map((item, index) => (
          <div
            className="card-item rounded-md py-4 px-[18px] border border-gray-500"
            key={index}
          >
            <div className="card-item-icon rounded-full w-11 h-11 flex items-center justify-center border dark:border-gray-500 border-gray-950">
              <img
                src={item.src}
                alt={index}
                className="w-6 invert-0 brightness-0 dark:inver-[1] dark:brightness-[100%]"
              />
            </div>
            <div className="card-item-value font-bold text-xl mt-3 mb-1">
              {item.value}
            </div>
            <p className="card-item-text font-semibold mb-3">{item.title}</p>
            <span className="card-item-sm-text text-[14px] font-normal">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sales;
