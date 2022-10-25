import React from 'react'
import Banner from '../component/Banner';
import Link from 'next/link'
import Button from '../component/Button';
import Navbar from '../component/Navbar';
import styles from '../styles/Components/about.module.css'

function About() {
  return (
    <>
    <Navbar active={'About'}/>
    <div >
    <Banner/>
    </div>
    <div className={styles.processcontainer}>
       <div className={styles.processcaption}>
          <p className={styles.processtitle}>What we do</p>
          <p className={styles.processinfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate feugiat a volutpat potenti nisi, </p>
       </div>
        <div className={styles.servicecategory}>
            <div className={styles.servicecaption}>
                <img src='/images/web.png' alt='megastack' />
                <p className={styles.servicetitle}>Web/Mobile Development</p>
                <p className={styles.serviceinfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate feugiat a volutpat potenti nisi, et eget facilisis
                    facilisi. Purus, purus tincidunt metus, euismod. Aliquam 
                    ullamcorper dolor sit lacus vel tempus ullamcorper.
                </p>
            </div>
            <div className={styles.servicecaption}>
                <img src='/images/design.png' alt='megastack' />
                <p className={styles.servicetitle}>UI/UX Design</p>
                <p className={styles.serviceinfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate feugiat a volutpat potenti nisi, et eget facilisis
                facilisi. Purus, purus tincidunt metus, euismod. Aliquam 
                ullamcorper dolor sit lacus vel tempus ullamcorper.
                </p>
            </div>
        </div> 
     <div className={styles.servicecategory}>
            <div className={styles.servicecaption}>
                <img src='/images/business.png' alt='megastack' />
                <p className={styles.servicetitle}>Business Automation</p>
                <p className={styles.serviceinfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate feugiat a volutpat potenti nisi, et eget facilisis
                facilisi. Purus, purus tincidunt metus, euismod. Aliquam 
                ullamcorper dolor sit lacus vel tempus ullamcorper.
                </p>
            </div>
            <div className={styles.servicecaption}>
                <img src='/images/blockchain.png'  alt='megastack'/>
                <p className={styles.servicetitle}>Blockchain Developement</p>
                <p className={styles.serviceinfo}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vulputate feugiat a volutpat potenti nisi, et eget facilisis
                facilisi. Purus, purus tincidunt metus, euismod. Aliquam 
                ullamcorper dolor sit lacus vel tempus ullamcorper.
                </p>
            </div>
        </div>
    </div>
    <footer className={styles.footercontainer}>
        <p className={styles.get}>Get in touch</p>
        <div className={styles.footer}>
          <Link href='/talk'><a><Button title='Lets Talk' /></a></Link>
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

export default About;