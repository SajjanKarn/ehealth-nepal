import React from "react";
import styles from "@/styles/auth.module.css";
import { Navigation } from "@/components/Navigation.component";

export default function Auth() {
  return (
    <div className={styles.auth_container}>
      <Navigation />
    </div>
  );
}
