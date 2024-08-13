import nianAvatar from '../../assets/Nian.jpg';
import schwarzAvatar from '../../assets/Schwarz.jpg';
import './Landing.css';

export default function Header() {
  return (
    <>
      <header>
        <h1>3D Printing</h1>
        <p>Learning how to print good stuff</p>
        <div>
          <a href="https://vitejs.dev" target="_blank">
            <img src={nianAvatar} className="logo vite" alt="nian avatar" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img
              src={schwarzAvatar}
              className="logo react"
              alt="schawrz avatar"
            />
          </a>
        </div>
      </header>
    </>
  );
}
