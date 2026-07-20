import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '@genshi/react';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['brand', 'neutral'] },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = {
  args: { children: 'Active', variant: 'brand' },
};

export const Neutral: Story = {
  args: { children: 'On leave', variant: 'neutral' },
};
