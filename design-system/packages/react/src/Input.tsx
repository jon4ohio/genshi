import type { InputHTMLAttributes } from 'react';
import { inputTokens, textColor, typographyVars } from './tokens';

export type InputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'size'
> & {
  size?: 'small' | 'mid' | 'large';
};

export function Input({
  size = 'mid',
  className,
  style,
  ...props
}: InputProps) {
  return (
    <input
      className={className}
      style={{
        boxSizing: 'border-box',
        width: '100%',
        margin: 0,
        color: textColor.primary,
        background: inputTokens.fill,
        border: `${inputTokens.borderWidth} solid ${inputTokens.border.default}`,
        borderRadius: inputTokens.radius,
        outline: 'none',
        height: inputTokens.size[size],
        paddingInline: inputTokens.paddingX[size],
        ...typographyVars('body-default-regular', { includeLineHeight: false }),
        lineHeight: 1.2,
        ...style,
      }}
      onFocus={(event) => {
        event.currentTarget.style.borderColor = inputTokens.border.active;
        props.onFocus?.(event);
      }}
      onBlur={(event) => {
        event.currentTarget.style.borderColor = inputTokens.border.default;
        props.onBlur?.(event);
      }}
      {...props}
    />
  );
}
