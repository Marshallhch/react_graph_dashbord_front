import { useEffect, useState } from 'react';

const ModeCtrl = () => {
  let [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    darkMode
      ? document.documentElement.classList.add('dark')
      : document.documentElement.classList.remove('dark');
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="absolute right-10 top-10 bg-black text-white px-5 py-3 rounded hover:bg-stone-700 dark:bg-white dark:text-black"
    >
      {darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ModeCtrl;
