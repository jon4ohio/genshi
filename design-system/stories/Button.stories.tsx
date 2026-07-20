import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '@genshi/react';

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['brand', 'neutral'] },
    size: { control: 'select', options: ['small', 'mid', 'large'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Brand: Story = {
  args: { children: 'Add employee', variant: 'brand' },
};

export const Neutral: Story = {
  args: { children: 'Clear search', variant: 'neutral' },
};

export const Disabled: Story = {
  args: { children: 'Unavailable', disabled: true },
};
