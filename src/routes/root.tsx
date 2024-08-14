import { Outlet } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../components/Sidebar/Sidebar';
import { BiPrinter, BiTestTube } from 'react-icons/bi';

export default function Root() {
  return (
    <>
      <Sidebar>
        <SidebarItem
          icon={<BiPrinter size={20} />}
          text="Printer"
          active={false}
          alert={false}
          to={'printer'}
        />
        <SidebarItem
          icon={<BiTestTube size={20} />}
          text="Calibrations"
          active={false}
          alert={false}
          to={'calibrations'}
        />
      </Sidebar>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
