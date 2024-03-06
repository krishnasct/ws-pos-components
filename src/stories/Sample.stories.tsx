import type { Meta, StoryObj } from "@storybook/react";

import { Sample } from "../../lib/components/sample";

const meta: any = {
  title: "WS Components/Sample",
  component: Sample,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Sample>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Sample_V1: Story = {
  args: {
    label: "Button_V1",
  },
};

export const Sample_V2: Story = {
  args: {
    label: "Button_V2",
  },
};
