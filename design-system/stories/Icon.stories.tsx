import type { Meta, StoryObj } from '@storybook/react-vite';
import { Icon } from '@genshi/react';

const meta = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: 'Status indicator', size: 16 },
};

export const CustomGlyph: Story = {
  render: () => (
    <Icon label="Add" size={20}>
      <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="1.5" />
    </Icon>
  ),
};
