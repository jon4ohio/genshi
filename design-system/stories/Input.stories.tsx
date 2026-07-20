import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '@genshi/react';

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: { control: 'select', options: ['small', 'mid', 'large'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Search by name, role, or location',
    'aria-label': 'Search employees',
  },
};

export const Disabled: Story = {
  args: { placeholder: 'Disabled', disabled: true },
};
