import type { Meta, StoryObj } from '@storybook/react-vite';

const swatches = [
  { name: 'text-primary', var: '--gsh-color-text-primary' },
  { name: 'text-muted', var: '--gsh-color-text-muted' },
  { name: 'text-brand', var: '--gsh-color-text-brand' },
  { name: 'surface-default', var: '--gsh-color-surface-default' },
  { name: 'surface-neutral-light', var: '--gsh-color-surface-neutral-light' },
  { name: 'button-brand', var: '--gsh-button-fill-brand-default' },
];

const meta = {
  title: 'Foundations/Tokens',
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ColorSwatches: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--gsh-space-gap-mid)' }}>
      {swatches.map((swatch) => (
        <div
          key={swatch.name}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--gsh-space-gap-mid)',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 'var(--gsh-radius-small)',
              border: '1px solid var(--gsh-color-border-muted)',
              background: `var(${swatch.var})`,
            }}
          />
          <code>
            {swatch.name} ({swatch.var})
          </code>
        </div>
      ))}
    </div>
  ),
};

export const SpacingScale: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--gsh-space-gap-large)' }}>
      {(['small', 'mid', 'large'] as const).map((size) => (
        <div key={size} style={{ display: 'flex', alignItems: 'center', gap: 'var(--gsh-space-gap-mid)' }}>
          <div
            style={{
              height: 12,
              width: `var(--gsh-space-padding-${size})`,
              background: 'var(--gsh-button-fill-brand-default)',
              borderRadius: 2,
            }}
          />
          <code>--gsh-space-padding-{size}</code>
        </div>
      ))}
    </div>
  ),
};
