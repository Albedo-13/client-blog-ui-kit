import { ReactNode } from "react"

export type ButtonsProps = {
  variant: "primary" | "secondary"
  type?: "button" | "submit"
  children: ReactNode
  onClick?: VoidFunction
}
