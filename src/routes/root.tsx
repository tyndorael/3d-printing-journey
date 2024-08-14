import { Link, Outlet } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../components/Sidebar/Sidebar';
import { BiArea, BiPrinter } from 'react-icons/bi';
import { IoSave } from 'react-icons/io5';

export default function Root() {
  return (
    <>
      <Sidebar>
        <SidebarItem
          icon={<BiPrinter size={20} />}
          text="Printer"
          active={false}
          alert={undefined}
          to={'printer'}
        />
      </Sidebar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
