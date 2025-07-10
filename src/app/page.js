//import Image from "next/image";
//import Link from 'next/link'
import Header from './header/page';
import styles from "./page.module.css";


export default function Home() {
  return (
     <div className={styles.background}>
      <Header />
      </div>
     );
}

    // <div className= {styles.addtocart}>
    //   <div className={styles.carttop}>
    //     <h2>List of Products Available</h2> <br/>
    //     <label htmlFor="searchInput">Search: </label>
    //     <input
    //       type="text"
    //       id="searchInput"
    //       placeholder="Filter by name, brand, year, price, color..."
    //     />
    //   </div>

    //   <h2>Phone Collections</h2>
    //   <section className={styles.productgrid}>
    //     <div className={styles.productcard} >
    //       <Image src="/Iphone 14.jpeg" alt="iPhone 14" width={200} height={200} />
    //       <h4>Model: iPhone 14</h4>
    //       <p>Brand: Apple</p>
    //       <p>YoM: 2022</p>
    //       <p>Color: Black</p>
    //       <p>Price: ₹79,999</p>
    //     </div>

    //     <div className={styles.productcard} >
    //       <Image src="/Galaxy S22.jpg" alt="Galaxy S22" width={200} height={200} />
    //       <h4>Model: Galaxy S22</h4>
    //       <p>Brand: Samsung</p>
    //       <p>YoM: 2022</p>
    //       <p>Color: Blue</p>
    //       <p>Price: ₹69,999</p>
    //     </div>

    //     <div className={styles.productcard} >
    //       <Image src="/Pixel 6.jpg" alt="Pixel 6" width={200} height={200} />
    //       <h4>Model: Pixel 6</h4>
    //       <p>Brand: Google</p>
    //       <p>YoM: 2021</p>
    //       <p>Color: White</p>
    //       <p>Price: ₹55,999</p>
    //     </div>

    //     <div className={styles.productcard}>
    //       <Image src="/OnePlus 11.jpeg" alt="OnePlus 11" width={200} height={200} />
    //       <h4>Model: OnePlus 11</h4>
    //       <p>Brand: OnePlus</p>
    //       <p>YoM: 2023</p>
    //       <p>Color: Green</p>
    //       <p>Price: ₹61,999</p>
    //     </div>

    //     <div className={styles.productcard}>
    //       <Image src="/Realme GT.jpeg" alt="Realme GT" width={200} height={200} />
    //       <h4>Model: Realme GT</h4>
    //       <p>Brand: Realme</p>
    //       <p>YoM: 2022</p>
    //       <p>Color: Red</p>
    //       <p>Price: ₹29,999</p>
    //     </div>

    //     <div className={styles.productcard}>
    //       <Image src="/Redmi Note 12.jpeg" alt="Redmi Note 12" width={200} height={200} />
    //       <h4>Model: Redmi Note 12</h4>
    //       <p>Brand: Xiaomi</p>
    //       <p>YoM: 2023</p>
    //       <p>Color: Gray</p>
    //       <p>Price: ₹18,999</p>
    //     </div>
    //   </section>
    // </div>
 
    /*<div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.js</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div> 


  );
}*/
