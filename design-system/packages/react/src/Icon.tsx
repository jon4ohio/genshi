import type { CSSProperties, ReactNode, SVGProps } from 'react';

export type IconProps = {
  children?: ReactNode;
  label: string;
  size?: number;
  className?: string;
  style?: CSSProperties;
} & Omit<SVGProps<SVGSVGElement>, 'children'>;

export function Icon({
  children,
  label,
  size = 16,
  className,
  style,
  ...props
}: IconProps) {
  return (
    <svg
      role="img"
      aria-label={label}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={{
        display: 'inline-block',
        flexShrink: 0,
        verticalAlign: 'middle',
        ...style,
      }}
      {...props}
    >
      {children ?? (
        <circle cx="8" cy="8" r="6" fill="currentColor" />
      )}
    </svg>
  );
}
