import type { CSSProperties, ElementType, ReactNode } from 'react';
import {
  textColor,
  type TextColor,
  typography,
  type TypographyVariant,
  typographyVars,
} from './tokens';

export type TextProps = {
  as?: ElementType;
  variant?: TypographyVariant;
  color?: TextColor;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

export function Text({
  as: Component = 'span',
  variant = 'body',
  color = 'primary',
  children,
  className,
  style,
}: TextProps) {
  const prefix = typography[variant];

  return (
    <Component
      className={className}
      style={{
        margin: 0,
        color: textColor[color],
        ...typographyVars(prefix),
        ...style,
      }}
    >
      {children}
    </Component>
  );
}
