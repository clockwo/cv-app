import Button from '../UI/button/Button';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Button>General</Button>
          </li>
          <li className="nav__item">
            <Button>Education</Button>
          </li>
          <li className="nav__item">
            <Button>Practical</Button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
