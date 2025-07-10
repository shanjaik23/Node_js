import styles from "./page.module.css";
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
  return (
    <div className={styles.background}>
      <div>
        <ul className={styles.nav}>
          <li><Link href="/">Home</Link></li>
           <li> <Link href="/task">Task List</Link> </li>
        </ul>
      </div>
      <div className={styles.homePage} id="home-page">
      <div className={styles.homeLeft}>
        <div className={styles.strong}>
          <h1>
            <strong>
              <br /><br />
              Get <span className={styles.highlight}>ready</span> for your business
              <br />
              & upgrade <span className={styles.highlight}>all aspects</span>
            </strong>
          </h1>
          <p><strong> _______</strong></p>
          <br />
          <p id="stg">
            Mexant HTML5 Template is provided free of charge. This layout is based on Bootstrap 5 CSS framework.
            Anyone can download and edit it for any professional website. Thank you for visiting TemplateMo website.
          </p>
        </div>
      </div>
      <div className={styles.homeRight}>
 <Image   src="/Home.png"   alt="Home page"   width={750}   height={500}   layout="responsive" />      
 </div>
    </div>
        
    </div>
  );
}