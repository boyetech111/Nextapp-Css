import { useState } from 'react';
// import { Link } from 'react-router-dom';
import Link from 'next/link'
import styles from '../styles/Components/navbar.module.css'
// import {Link} from "react-router-dom"

function Navbar({ active }) {
  const [hamburger, setHamburger] = useState(false);
    
  function togglehamburger() {
     setHamburger(!hamburger)
   }
  

  return (
    <div className={styles.navbarcontainer}>
      <div className={styles.navbarlogo}>
        <Link href={"/"}>
           <img src="/images/megastack.svg" alt="megastack" />
        </Link>
        
        <div onClick={togglehamburger} className={styles.navmain}>
         <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 18.5H20H4ZM4 6.5H20H4ZM4 12.5H20H4Z"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
      </div>

       <div className={hamburger ? `${styles.shownavheader}`: `${styles.navheader}` }>
        <Link href='/'> 
         <a className={`${ active === "Home" ? `${styles.activeswitch}` : `${styles.inactiveswitch}` }`}
          >Home</a>
        </Link>
        <Link href='/about'> 
         <a className={`${active === "About" ? `${styles.activeswitch}` : `${styles.inactiveswitch}` }`}
          >About Us</a>
        </Link>
        <Link 
          href='/ourwork'
        > 
        <a className={`${active === "Work" ? `${styles.activeswitch}` : `${styles.inactiveswitch}`}`}>Our Work</a>
        </Link>
        <Link
          href='/talk'
        > 
        <a className={`${active === "Contact" ? `${styles.activeswitch}` : `${styles.inactiveswitch}`}`}>Lets Talk</a>
        </Link>  
       </div>
    </div>
  )
}

export default Navbar;