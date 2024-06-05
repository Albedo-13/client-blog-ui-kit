import { ChangeEvent } from "react"

export type CheckboxButtonProps = {
  id: string
  name: string
  label: string
  checked: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}
