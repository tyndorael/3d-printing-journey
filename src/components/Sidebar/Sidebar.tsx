import { useState } from 'react';
import { navItems } from '../../data';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { TiSocialPinterest } from 'react-icons/ti';

const Sidebar = () => {
  const [click, setClick] = useState(false);

  return (
    <div className="flex items-start">
      <div
        className={`h-[100vh] w-64 shadow-2xl text-gray-400 text-[18px] transition-all duration-300 ${click && 'w-[50px]'}`}>
        <div className="flex items-start gap-[20px] p-4">
          <div className="bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-[4px] items-center transition-all duration-300">
            <TiSocialPinterest />{' '}
          </div>
          {!click && (
            <p className="text-blue-600 text-[24px] font-semibold">
              3D Journey
            </p>
          )}
        </div>
        <ul className="flex flex-col gap-14 p-4 mt-10">
          {navItems.map((item) => (
            <li
              className="flex items-center gap-x-2 transition-all duration-300"
              key={item.id}>
              <span title={item.title}>{item.icon}</span>
              {!click && item.title}
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => setClick(!click)}
        className={`bg-white shadow-lg rounded-full p-2 ms-[-20px] mt-4 transition-all duration-300 ${click && 'transform rotate-180'}`}>
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
};

export default Sidebar;
