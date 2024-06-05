import React from "react"

import styles from "./checkboxes.module.scss"
import { CheckboxButtonProps } from "./types"

export function CheckboxButton({
  id,
  name,
  label,
  checked,
  onChange
}: CheckboxButtonProps) {
  return (
    <label className={styles.checkbox} htmlFor={id}>
      <input
        type='checkbox'
        name={name}
        id={id}
        className={styles.input}
        checked={checked}
        value={label}
        onChange={onChange}
      />
      <p className={styles.text}>{label}</p>
    </label>
  )
}
