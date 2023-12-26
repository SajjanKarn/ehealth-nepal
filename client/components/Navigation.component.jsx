import React from "react";
import "@/styles/navigation.css";
import { Button } from "./Button.component";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav>
      <div className="logo">EHealth</div>

      <ul className="nav-links">
      <li>
          <Link href={"/"} >Home</Link>
        </li>
        <li>
          <Link href={"/assistant"} >Assistant</Link>
        </li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>

      <div className="action-button">
        <Link href="/auth/register">
          <button class="btn btn-info">Register</button>
        </Link>
      </div>
    </nav>
  );
};
