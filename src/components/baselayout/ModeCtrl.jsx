import { useEffect, useState } from 'react';
import { Icons } from '../../assets/icons';

const ModeCtrl = () => {
  let [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleTheme} className="text-white px-5 py-3">
      {/* {darkMode ? 'Light' : 'Dark'} Mode */}
      <img
        src={darkMode ? Icons.SunFill : Icons.MoonFill}
        alt=""
        className="w-4 h-4 dark:invert-[1] dark:brightness-[100%]"
      />
    </button>
  );
};

export default ModeCtrl;
