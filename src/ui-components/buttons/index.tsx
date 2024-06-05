import React from "react"

import styles from "./buttons.module.scss"
import { ButtonsProps } from "./types"

export function Button({
  variant,
  type = "button",
  children,
  onClick
}: ButtonsProps) {
  return (
    <button
      className={`${styles.button} ${styles.primaryButton}`}
      type={type}
      data-variant={variant}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
