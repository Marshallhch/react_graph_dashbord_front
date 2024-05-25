import { Icons } from '../../assets/icons';
import { MdOutlineClose } from 'react-icons/md';
import { MENU_LISTS } from '../arrayLists/menuLists';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import { routes } from '../arrayLists/menuLists';
import { useState } from 'react';
import { setSidebarOpen } from '../../redux/slices/sidebarSlice';
import { useDispatch, useSelector } from 'react-redux';

const Sidebar = () => {
  const [currentTab, clickedTab] = useState(0);
  const isSidebarOpen = useSelector((state) => state.sidebar.isSidebarOpen);
  const dispatch = useDispatch();

  // console.log(isSidebarOpen);

  const selectMenuHandler = (index) => {
    clickedTab(index);
  };
  return (
    <div
      className={`dark:bg-gray-950 bg-white py-5 px-4 dark:shadow-[0_0.125rem_0.25rem_rgba(255,255,255,0.3)] shadow-[0_0.125rem_0.25rem_rgba(165,163,174,0.3)] w-[20%] flex flex-col rounded-sm z-[1000] fixed h-screen ${
        isSidebarOpen ? 'left-[-20%]' : 'left-0'
      }`}
    >
      <div className="sidebar-top mb-[32px] flex items-center justify-between">
        <div className="sidebar-brand flex items-center justify-center gap-x-[12px]">
          <span className="brand-logo bg-blue-700 rounded-md w-8 h-8 flex place-content-center">
            <img src={Icons.LogoWhite} alt="site brand logo" className="w-6" />
          </span>
          <span className="brand-text text-lg font-semibold dark:text-white text-gray-950">
            Marshall
          </span>
        </div>
        <button
          className="sidebar-close-btn text-black p-[0.125rem] rounded-sm bg-white cursor-pointr hover:bg-gray-300"
          onClick={() => dispatch(setSidebarOpen())}
        >
          <MdOutlineClose />
        </button>
      </div>
      <div className="sidebar-body flex-1">
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>

          <div className="sidebar-menu">
            <ul className="menu-lists grid gap-y-1.5">
              {MENU_LISTS.map((menu, index) => (
                <li key={index} className="menu-item">
                  <Link
                    to={routes[index].path}
                    className={`menu-link h-[44px] flex items-center gap-x-[14px] py-0.5 px-5 font-medium ${
                      index === currentTab
                        ? 'bg-blue-700 dark:text-white text-gray-950 rounded-sm'
                        : ''
                    }`}
                    onClick={() => selectMenuHandler(index)}
                  >
                    <span
                      className={`menu-link-icon w-5 ${
                        index === currentTab
                          ? 'invert-[1] brightness-[100%]'
                          : ''
                      }`}
                    >
                      <img src={menu.icon} alt={menu.alt} />
                    </span>
                    <span
                      className={`menu-link-text ${
                        index === currentTab ? 'text-white dark:text-white' : ''
                      }`}
                    >
                      {menu.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default Sidebar;
