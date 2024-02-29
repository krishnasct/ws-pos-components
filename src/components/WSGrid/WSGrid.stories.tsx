import type { Meta, StoryObj } from '@storybook/react';

import  WSGrid  from './WSGrid';

const meta = {
  title: 'WS Components/WSGrid',
  component: WSGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WSGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WSGrid_V1: Story = {
  args: {
    label: 'WSGrid_V1',
  },
};

export const WSGrid_V2: Story = {
  args: {
    label: 'WSGrid_V2',
  },
};


