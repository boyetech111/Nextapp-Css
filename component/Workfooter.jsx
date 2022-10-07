import React from 'react';
import Button from './Button';
import Link from 'next/link'
import styles from '../styles/Components/workfooter.module.css'

function Workfooter() {
  return (
    <>
     <footer className={styles.workcontainer}>
        <p className={styles.get}>Get in touch</p>
        <div className={styles.footer}>
          <Link href={'/talk'}><a><Button title='Lets Talk' /></a></Link>
            <p className={styles.footerinfo}>
              Reach out to find out how we can be of help to you. Hit the button below to send us an email at hello@megastack.tech
              <br />
              <br />
              <br/>
              You can also check out some of our previous project we’ve helped our partners ship to their users. Click here to see our works.
            </p> 
      </div>
      <p className={styles.border}></p>
      <div className={styles.footercopyright}>
        <div className={styles.copyrightinfo}>
           ©Copyright 2022, Megastack Technologies Limited
        </div>
        <div className={styles.copyrightsocials}>
          <p className={styles.instagram}>
            <img src='/images/instagram.svg' alt='instagram' />
            instagram
          </p>
          <p className={styles.linkdin}>
            <img src='/images/linkdin.svg' alt='linkdin'/>
            linkedin
          </p>
          <p className={styles.facebook}>
            <img src='/images/facebook.svg ' alt='facebook' />
            facebook
          </p>
          <p className={styles.twitter}>
            <img  src='/images/twitter.svg'  alt='twitter' />
            twitter
          </p>
        </div>
      </div>
    </footer>   
    </>
  )
}

export default Workfooter;