import { Link, Outlet } from 'react-router-dom';
import Sidebar, { SidebarItem } from '../components/Sidebar/Sidebar';
import { BiArea } from 'react-icons/bi';
import { IoSave } from 'react-icons/io5';

export default function Root() {
  return (
    <>
      <Sidebar>
        <SidebarItem
          icon={<BiArea size={20} />}
          text="Statistics"
          active
          alert={undefined}
          to={`contacts/1`}
        />
        <SidebarItem
          icon={<IoSave size={20} />}
          text="Users"
          active
          alert={undefined}
          to={`contacts/2`}
        />
      </Sidebar>
      <div id="sidebar">
        <h1>React Router Contacts</h1>
        <nav>
          <ul>
            <li>
              <Link to={`contacts/1`}>Your Name</Link>
            </li>
            <li>
              <Link to={`contacts/2`}>Your Friend</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
