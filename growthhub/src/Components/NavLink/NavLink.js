import { Link } from 'react-router-dom';
import css from './NavLink.module.css'

//import './Header.css';

const HeaderLink = ({ page }) => {
  

  return <Link to={`./${page}`} className={css.link}>{page}</Link>;
};

export default HeaderLink;