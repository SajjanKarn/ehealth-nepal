import { Navigation } from "@/components/Navigation.component";
import styles from "./page.module.css"
import { Button } from "@/components/Button.component";
import Image from "next/image";
import HeroImage from "@/public/hero.svg"

export default function Home() {
  return (
    <main>
      
      <div className={styles.container}>

        <h1>Welcome To EHealth.</h1>

        <div className={styles.action}>
              <button className="btn btn-primary" >
                Register
              </button>
              <button className="btn btn-info">
                Login
              </button>
        </div>

        <div>
          <Image src={HeroImage} height={400} />
        </div>

      </div>

    </main>
  );
}
