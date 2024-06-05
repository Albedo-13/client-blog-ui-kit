import type { Meta, StoryObj } from "@storybook/react"
import { fn } from "@storybook/test"

import { Button } from "."

const meta = {
  title: "Modsen Client Blog/Buttons",
  component: Button,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  args: { onClick: fn() }
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    variant: "primary",
    type: "button",
    children: "Primary Button"
  }
}

export const Secondary: Story = {
  args: {
    variant: "secondary",
    type: "button",
    children: "Secondary Button"
  }
}
