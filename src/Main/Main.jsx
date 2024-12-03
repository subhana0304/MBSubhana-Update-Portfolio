import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import CustomCursor from '../Components/CustomCursor/CustomCursor';

export default function Main() {
  return (
    <div className="relative">
      {/* Cursor Animation */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <CustomCursor />
      </div>

      {/* Navbar and Content */}
      <div className="relative z-10">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}
