import Button from './Button';
import Link from 'next/link'
import styles from '../styles/Components/header.module.css';

function Header() {
  return (
    <div className={styles.headercontainer}>
       <div className={styles.headdescription}>
        <p className={styles.headline}>Your partner in  building amazing digital products</p>
        <p id={styles.subheadline}>
          We are a software development agency leveraging design thinking 
          framework to help our clients meet their 
          increasing revenue with best users experience.
        </p>
       </div>
       <div className={styles.fullbutton}>
         <Link  href={'/talk'}><a><Button title='Lets Talk'/></a></Link>
       </div>
       <div className={styles.section}>
        <div className={styles.sectiondescription}> 
            <p className={styles.title}>We Ideate</p>
            <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam erat quam tellus feugiat risus semper. Amet orci facilisi nec.</p>
        </div>
        <div className={styles.sectiondescription}>
            <p className={styles.title}>We Design</p>
            <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam erat quam tellus feugiat risus semper. Amet orci facilisi nec.</p>
        </div>
        <div className={styles.sectiondescription}>
            <p className={styles.title}>We Develop</p>
            <p className={styles.info}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget nullam erat quam tellus feugiat risus semper. Amet orci facilisi nec.</p>
        </div>
       </div>
    </div>
  )
}

export default Header;