import HeaderLink from "../NavLink/NavLink";
import css from './NavBar.module.css';
const NavBar = () => {
  return (
    <div className={css.Nav}>
      <HeaderLink page='Home' />
      <HeaderLink page='All Resources' />
      <HeaderLink page='Create' />
    </div>
  );
};

export default NavBar;