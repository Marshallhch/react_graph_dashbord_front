import React from 'react';
import { MdOutlineMenu } from 'react-icons/md';
import { Icons } from '../../assets/icons';
import AppbarLang from './AppbarLang';
import ModeCtrl from './ModeCtrl';
import AppbarProfile from './AppbarProfile';

const Appbar = () => {
  return (
    <div className="dark:shadow-[0_0_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0_0.25rem_rgba(165,163,174,0.3)] py-3 px-6 rounded-sm dark:bg-gray-950 bg-white dark:text-white text-gray-950 w-[calc(80%-28px)] ml-[calc(20%+14px)]">
      <div className="appbar-content flex items-center justify-between flex-wrap">
        <div className="appbar-left flex items-center justify-start gap-x-3">
          <button
            type="button"
            className="sidebar-open-btn items-center hidden"
          >
            <MdOutlineMenu size={24} />
          </button>
          <h3 className="appbar-title text-xl font-semibold">Dashboard</h3>
        </div>
        <div className="appbar-right flex items-center flex-wrap">
          <div className="appbar-search">
            <form action="">
              <div className="input-group dark:bg-gray-700 bg-gray-300 rounded-xl h-11 min-w-80 flex items-stretch py-1 px-3 relative">
                <span className="input-icon w-5 inline-flex place-items-center">
                  <img
                    src={Icons.SearchBlue}
                    className="input-icon-img"
                    alt=""
                  />
                </span>
                <input
                  type="text"
                  placeholder="Search here ..."
                  className="input-control border-none outline-0 text-[15px] dark:bg-gray-700 bg-gray-300 px-3 dark:text-white text-gray-950 dark:placeholder-white placeholder-gray-800"
                />
              </div>
            </form>
          </div>

          <AppbarLang />

          <button
            type="button"
            className="appbar-icon-btn w-8 h-8 rounded-md relative"
          >
            <img src={Icons.NotificationOrange} className="w-6" alt="" />
            <span className="icon-btn-dot w-2 h-2 rounded-full bg-red-600 absolute top-0 right-2"></span>
          </button>
          <AppbarProfile />
          <ModeCtrl />
        </div>
      </div>
    </div>
  );
};

export default Appbar;
