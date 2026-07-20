import type { CSSProperties, ElementType, ReactNode } from 'react';
import { spacing, surface } from './tokens';

export type BoxProps = {
  as?: ElementType;
  children: ReactNode;
  padding?: keyof typeof spacing.padding;
  radius?: keyof typeof spacing.radius;
  bordered?: boolean;
  className?: string;
  style?: CSSProperties;
};

export function Box({
  as: Component = 'div',
  children,
  padding = 'mid',
  radius = 'small',
  bordered = false,
  className,
  style,
}: BoxProps) {
  return (
    <Component
      className={className}
      style={{
        background: surface.default,
        padding: spacing.padding[padding],
        borderRadius: spacing.radius[radius],
        border: bordered
          ? `var(--gsh-border-width-default) solid var(--gsh-color-border-muted)`
          : undefined,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
