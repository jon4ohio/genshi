import type { Meta, StoryObj } from '@storybook/react-vite';
import { Box, Stack, Text } from '@genshi/react';

const meta = {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
} satisfies Meta<typeof Box>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Bordered: Story = {
  render: () => (
    <Box padding="mid" bordered>
      <Stack gap="small">
        <Text variant="sectionTitle">No employees found</Text>
        <Text color="muted">Try a different search term.</Text>
      </Stack>
    </Box>
  ),
};
