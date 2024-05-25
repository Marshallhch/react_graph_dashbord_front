import './App.css';
import Sidebar from './components/baselayout/Sidebar';
// import ModeCtrl from './components/ModeCtrl';

function App() {
  return (
    <div className="App w-screen h-screen flex items-center justify-center flex-col dark:bg-black dark:text-white">
      <div className="page-wrapper min-h-screen flex w-full">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
