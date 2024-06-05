import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { CheckboxButton } from "."

const meta = {
  title: "Modsen Client Blog/Checkboxes",
  component: CheckboxButton,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onChange: fn() }
} satisfies Meta<typeof CheckboxButton>

export default meta
type Story = StoryObj<typeof meta>

export const Checked: Story = {
  args: {
    id: "1",
    name: "tags",
    label: "Tag checked",
    checked: true
  }
}

export const Unchecked: Story = {
  args: {
    id: "1",
    name: "tags",
    label: "Tag unchecked",
    checked: false
  }
}
