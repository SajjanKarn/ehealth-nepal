import { Navigation } from "@/components/Navigation.component";
import styles from "./page.module.css"
import { Button } from "@/components/Button.component";
import Image from "next/image";
import HeroImage from "@/public/hero.svg"

export default function Home() {
  return (
    <main>
      
      {/* Navigation */}
      <Navigation />

      <div className={styles.container}>

        <h1>Welcome To EHealth.</h1>

        <div className={styles.action}>
              <Button variant="primary" >
                Register
              </Button>
              <Button variant="secondary">
                Login
              </Button>
        </div>

        <div>
          <Image src={HeroImage} height={400} />
        </div>

      </div>

    </main>
  );
}
