import React, { useContext } from "react";
import "@/styles/navigation.css";
import { Button } from "./Button.component";
import Link from "next/link";
import AuthContext from "@/context/AuthContext";

export const Navigation = () => {
  const { user } = useContext(AuthContext);
  return (
    <nav>
      <div className="logo">EHealth</div>

      <ul className="nav-links">
        <li>
          <Link href="/">
            <p>Home</p>
          </Link>
        </li>
      </ul>

      <div className="action-button">
        {!user ? (
          <>
            {" "}
            <Link href="/auth/login">
              <button class="btn btn-error">Login</button>
            </Link>
            <Link href="/auth/register">
              <button class="btn btn-info">Register</button>
            </Link>
          </>
        ) : (
          <Link href="/auth/register">
            <button class="btn btn-info">Logout</button>
          </Link>
        )}
      </div>
    </nav>
  );
};
