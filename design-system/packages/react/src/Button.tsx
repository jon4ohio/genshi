import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { buttonTokens, typographyVars } from './tokens';

export type ButtonProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'children'
> & {
  children: ReactNode;
  variant?: 'brand' | 'neutral';
  size?: 'small' | 'mid' | 'large';
};

const fillByVariant = {
  brand: buttonTokens.fill.brand,
  neutral: buttonTokens.fill.neutral,
} as const;

export function Button({
  children,
  variant = 'brand',
  size = 'mid',
  className,
  style,
  disabled,
  ...props
}: ButtonProps) {
  const colors = fillByVariant[variant];

  return (
    <button
      type="button"
      disabled={disabled}
      className={className}
      style={{
        boxSizing: 'border-box',
        margin: 0,
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.6 : 1,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        whiteSpace: 'nowrap',
        flexShrink: 0,
        width: 'auto',
        minWidth: 'max-content',
        alignSelf: 'start',
        background: colors.default,
        color: buttonTokens.content,
        borderRadius: buttonTokens.radius,
        paddingInline: buttonTokens.paddingX[size],
        paddingBlock: buttonTokens.paddingY,
        ...typographyVars('label-default-regular', { includeLineHeight: false }),
        lineHeight: 1.2,
        ...style,
      }}
      onMouseEnter={(event) => {
        if (!disabled) {
          event.currentTarget.style.background = colors.hover;
        }
        props.onMouseEnter?.(event);
      }}
      onMouseLeave={(event) => {
        if (!disabled) {
          event.currentTarget.style.background = colors.default;
        }
        props.onMouseLeave?.(event);
      }}
      onMouseDown={(event) => {
        if (!disabled) {
          event.currentTarget.style.background = colors.pressed;
        }
        props.onMouseDown?.(event);
      }}
      onMouseUp={(event) => {
        if (!disabled) {
          event.currentTarget.style.background = colors.hover;
        }
        props.onMouseUp?.(event);
      }}
      {...props}
    >
      {children}
    </button>
  );
}
