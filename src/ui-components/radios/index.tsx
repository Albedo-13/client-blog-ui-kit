import React from "react"

import styles from "./radios.module.scss"
import { CheckboxButtonProps } from "./types"

export function RadioButton({
  id,
  name,
  icon,
  label,
  checked,
  onChange
}: CheckboxButtonProps) {
  return (
    <label className={styles.radio} htmlFor={id}>
      <input
        type='radio'
        id={id}
        name={name}
        className={styles.input}
        value={label}
        checked={checked}
        onChange={onChange}
      />
      <div className={styles.imageWrapper}>
        <img
          src={icon}
          className={styles.image}
          width={24}
          height={24}
          alt='radio image'
        />
      </div>
      <p className={styles.text}>{label}</p>
    </label>
  )
}
