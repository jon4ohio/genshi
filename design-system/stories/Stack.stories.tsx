import type { Meta, StoryObj } from '@storybook/react-vite';
import { Stack, Text } from '@genshi/react';

const meta = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs'],
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Vertical: Story = {
  render: () => (
    <Stack gap="small">
      <Text variant="bodyStrong">Ada Okonkwo</Text>
      <Text variant="caption" color="muted">
        Engineering · Lagos
      </Text>
    </Stack>
  ),
};

export const Horizontal: Story = {
  render: () => (
    <Stack direction="horizontal" gap="mid" align="center" justify="space-between">
      <Text variant="bodyStrong">Ada Okonkwo</Text>
      <Text variant="label" color="brand">
        Active
      </Text>
    </Stack>
  ),
};
