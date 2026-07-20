import type { CSSProperties, ElementType, ReactNode } from 'react';
import { spacing } from './tokens';

export type StackProps = {
  as?: ElementType;
  direction?: 'vertical' | 'horizontal';
  gap?: keyof typeof spacing.gap;
  align?: CSSProperties['alignItems'];
  justify?: CSSProperties['justifyContent'];
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Stack({
  as: Component = 'div',
  direction = 'vertical',
  gap = 'mid',
  align,
  justify,
  children,
  className,
  style,
}: StackProps) {
  return (
    <Component
      className={className}
      style={{
        display: 'flex',
        flexDirection: direction === 'horizontal' ? 'row' : 'column',
        gap: spacing.gap[gap],
        alignItems: align,
        justifyContent: justify,
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
