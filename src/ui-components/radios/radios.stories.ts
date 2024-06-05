import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { RadioButton } from "."

const meta = {
  title: "Modsen Client Blog/Radios",
  component: RadioButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onChange: fn() }
} satisfies Meta<typeof RadioButton>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    id: "2",
    name: "categories",
    icon: "https://via.placeholder.com/25",
    label: "Tag checked",
    checked: true
  }
}

export const Unchecked: Story = {
  args: {
    id: "2",
    name: "categories",
    icon: "https://via.placeholder.com/25",
    label: "Tag unchecked",
    checked: false
  }
}
