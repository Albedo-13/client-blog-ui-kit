import { ChangeEvent } from "react"

export type CheckboxButtonProps = {
  id: string
  name: string
  icon: string
  label: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
