import type { Meta, StoryObj } from '@storybook/react-vite';
import { Text } from '@genshi/react';

const meta = {
  title: 'Components/Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'pageTitle',
        'sectionTitle',
        'subtitle',
        'body',
        'bodyStrong',
        'label',
        'labelStrong',
        'caption',
      ],
    },
    color: {
      control: 'select',
      options: ['primary', 'muted', 'brand', 'inverse'],
    },
  },
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PageTitle: Story = {
  args: { as: 'h1', variant: 'pageTitle', children: 'Employee Directory' },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    color: 'muted',
    children: 'Manage team members across locations',
  },
};
