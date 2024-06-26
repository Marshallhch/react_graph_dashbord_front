import './App.css';
import Appbar from './components/baselayout/Appbar';
import Sidebar from './components/baselayout/Sidebar';
import DashboardScreen from './components/dashboard/DashboardScreen';
// import ModeCtrl from './components/ModeCtrl';

function App() {
  return (
    <div className="App w-screen flex items-center justify-center flex-col dark:bg-[#212121] dark:text-white">
      <div className="page-wrapper min-h-screen flex w-full">
        <Sidebar />
        <div className="content-wrapper w-full">
          <Appbar />
          <DashboardScreen />
        </div>
      </div>
    </div>
  );
}

export default App;
