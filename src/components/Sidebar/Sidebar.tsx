import { useContext, createContext, useState, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ImCross, ImEnlarge2 } from 'react-icons/im';

import schwarzAvatar from '../../assets/Schwarz.jpg';

const SidebarContext = createContext(false);

type Sidebar = {
  children: React.ReactNode;
};

export default function Sidebar({ children }: Sidebar) {
  const [expanded, setExpanded] = useState(true);

  return (
    <aside className="h-screen">
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          <img
            src={schwarzAvatar}
            className={`overflow-hidden transition-all ${
              expanded ? 'w-12' : 'w-0'
            }`}
            alt=""
          />
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100">
            {expanded ? <ImCross /> : <ImEnlarge2 />}
          </button>
        </div>

        <SidebarContext.Provider value={expanded}>
          <ul className="flex-1 px-3">{children}</ul>
        </SidebarContext.Provider>
      </nav>
    </aside>
  );
}

type SidebarItemType = {
  icon: React.ReactNode;
  text: string;
  active: boolean;
  alert: boolean;
  to: string;
};

export function SidebarItem({
  icon,
  text,
  active,
  alert,
  to,
}: SidebarItemType) {
  const expanded = useContext(SidebarContext);

  return (
    <li
      className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${
          active
            ? 'bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'
            : 'hover:bg-indigo-50 text-gray-600'
        }
    `}>
      {icon}
      <span
        className={`overflow-hidden transition-all ${
          expanded ? 'w-52 ml-3' : 'w-0'
        }`}>
        <Link to={to}>{text}</Link>
      </span>
      {alert && (
        <div
          className={`absolute right-2 w-2 h-2 rounded bg-indigo-400 ${
            expanded ? '' : 'top-2'
          }`}
        />
      )}

      {!expanded && (
        <div
          className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          bg-indigo-100 text-indigo-800 text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
      `}>
          <Link to={to}>{text}</Link>
        </div>
      )}
    </li>
  );
}
