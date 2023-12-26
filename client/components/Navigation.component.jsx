import React from "react";
import  '@/styles/navigation.css'
import { Button } from "./Button.component";

export const Navigation = () => {
  return (
    <nav>
      <div className="logo">EHealth</div>

      <ul className='nav-links'>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
        <li>Home</li>
      </ul>

      <div className="action-button" >
        <Button variant="primary" size="md" >
          Register
        </Button>
      </div>
    </nav>
  );
};
