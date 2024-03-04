import type { Meta, StoryObj } from '@storybook/react';

import  WSDataGrid  from './WSDataGrid';

const meta: any = {
  title: 'WS Components/WSDataGrid',
  component: WSDataGrid,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof WSDataGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WSDataGrid_V1: Story = {
  args: {
    label: 'WSDataGrid_V1',
  },
};

export const WSDataGrid_V2: Story = {
  args: {
    label: 'WSDataGrid_V2',
  },
};


