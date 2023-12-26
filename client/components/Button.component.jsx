import React from 'react'
import  '@/styles/button.css'

export const Button = ({ variant = "primary", children, size = "md", loading = false, disabled = false }) => {


    const backgroundColor = variant === "primary" ? "#11009E" : "#EEF5FF";
    const color = variant === "primary" ? "#fff" : "black";

  return (
    <button className={`${size} ${variant}`} disabled={disabled} style={{ backgroundColor, color }}    >
        {children}
    </button>
  )
}
