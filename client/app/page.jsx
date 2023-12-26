import { Navigation } from "@/components/Navigation.component";
import styles from "./page.module.css";
import { Button } from "@/components/Button.component";
import Image from "next/image";
import HeroImage from "@/public/hero.svg";

export default function Home() {
  return (
    <main>
<<<<<<< HEAD
      
=======
      {/* Navigation */}
      <Navigation />

>>>>>>> d243416e7dfa98ac7f4a21dbdc423ce84226f97c
      <div className={styles.container}>
        <h1>Welcome To EHealth.</h1>

        <div className={styles.action}>
<<<<<<< HEAD
              <button className="btn btn-primary" >
                Register
              </button>
              <button className="btn btn-info">
                Login
              </button>
=======
          <Button variant="primary">Register</Button>
          <Button variant="secondary">Login</Button>
>>>>>>> d243416e7dfa98ac7f4a21dbdc423ce84226f97c
        </div>

        <div>
          <Image src={HeroImage} height={400} />
        </div>
      </div>
    </main>
  );
}
