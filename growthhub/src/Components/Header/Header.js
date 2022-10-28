import React from 'react'
import css from './Header.module.css'
import NavBar from '../NavBar/NavBar'

const Header = () => {
  return (
    <div>
    <div className={css.title}>
   <a href='./'> <h3 className={css.h3}>The Growth Hub</h3> </a>
    <img className={css.logo} src="https://static.wixstatic.com/media/11bac6_2dd5eb2b5f3c4b84856d9a7082d9bebf~mv2.png/v1/fill/w_248,h_80,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11bac6_2dd5eb2b5f3c4b84856d9a7082d9bebf~mv2.png" />
    

</div>
<NavBar></NavBar>
</div>

  )
}

export default Header;