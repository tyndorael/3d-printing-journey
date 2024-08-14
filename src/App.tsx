import Sidebar, { SidebarItem } from './components/Sidebar/Sidebar';

import './App.css';
import { BiArea } from 'react-icons/bi';
import { IoSave } from 'react-icons/io5';

function App() {
  return (
    <>
      <Sidebar>
        <SidebarItem
          icon={<BiArea size={20} />}
          text="Statistics"
          active
          alert={undefined}
        />
        <SidebarItem
          icon={<IoSave size={20} />}
          text="Users"
          active
          alert={undefined}
        />
      </Sidebar>
      <div className="p-4">
        {/* Title */}
        <h1 className="text-3xl font-bold mb-4">titulo</h1>
        {/* Additional content */}
        <p></p>
      </div>
    </>
  );
}

export default App;
