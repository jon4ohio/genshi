import type { CSSProperties, ReactNode } from 'react';
import { badgeTokens, typographyVars } from './tokens';

export type BadgeProps = {
  children: ReactNode;
  variant?: 'brand' | 'neutral';
  className?: string;
  style?: CSSProperties;
};

export function Badge({
  children,
  variant = 'neutral',
  className,
  style,
}: BadgeProps) {
  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: badgeTokens.fill[variant],
        color: badgeTokens.text[variant],
        paddingInline: badgeTokens.paddingX,
        paddingBlock: badgeTokens.paddingY,
        borderRadius: badgeTokens.radius,
        ...typographyVars('label-default-regular', { includeLineHeight: false }),
        lineHeight: 1.2,
        ...style,
      }}
    >
      {children}
    </span>
  );
}
