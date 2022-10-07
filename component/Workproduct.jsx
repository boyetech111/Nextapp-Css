import React from 'react';
import styles from '../styles/Components/workproduct.module.css';

function Workproduct() {
  return (
    <>
       <div className={styles.workcontain}>
        {/* <div className={styles.productdescription}>
          <p className={styles.case}>Case Study</p>
          <p className={styles.view}>View More</p>
        </div> */}
        <div className={styles.productdetails}>
            <div className={styles.productcard}>
                <div className={styles.card}> 
                <img src='images/yummy.png' alt='yummy' />
                </div>
                <p className={styles.heading}>Yummy Spot</p>
                <p className={styles.subheading}>UI/UX Design, Desktop App</p>
            </div>
            <div className={styles.productcard}>
            <div className={styles.card}> 
              <img src='images/vale.png' alt='vale'/> 
            </div>   
                <p className={styles.heading}>Vale Finance</p>
                <p className={styles.subheading}>UI/UX Design, Website, Web App</p>
            </div>
        </div>
        <div className={styles.productdetails}>   
            <div className={styles.productcard}>
              <div className={styles.card}>   
                <img src='images/aero.png' alt='aero'/>
              </div>   
                <p className={styles.heading}>Aero</p>
                <p className={styles.subheading}>UI/UX Design, Website</p>
            </div>
            <div className={styles.productcard}>
              <div className={styles.card}> 
                <img src='images/godark.png' alt='go'/> 
              </div>    
                <p className={styles.heading}>GoDark</p>
                <p className={styles.subheading}>Website, Web App Dev</p>
            </div>
        </div> 
        <div className={styles.productdetails}>
            <div className={styles.productcard}>
                <div className={styles.card}> 
                <img src='images/yummy.png' alt='yummy' />
                </div>
                <p className={styles.heading}>Yummy Spot</p>
                <p className={styles.subheading}>UI/UX Design, Desktop App</p>
            </div>
            <div className={styles.productcard}>
            <div className={styles.card}> 
              <img src='images/vale.png' alt='vale'/> 
            </div>   
                <p className={styles.heading}>Vale Finance</p>
                <p className={styles.subheading}>UI/UX Design, Website, Web App</p>
            </div>
        </div>
        <div className={styles.productdetails}>   
            <div className={styles.productcard}>
              <div className={styles.card}>   
                <img src='images/aero.png' alt='aero'/>
              </div>   
                <p className={styles.heading}>Aero</p>
                <p className={styles.subheading}>UI/UX Design, Website</p>
            </div>
            <div className={styles.productcard}>
              <div className={styles.card}> 
                <img src='images/godark.png' alt='go'/> 
              </div>    
                <p className={styles.heading}>GoDark</p>
                <p className={styles.subheading}>Website, Web App Dev</p>
            </div>
        </div> 
      </div>  
    </>
  )
}

export default Workproduct;