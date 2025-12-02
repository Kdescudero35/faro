interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  disabled,
  className,
}) => (
  <button
    disabled={disabled}
    className={`py-2 px-4 font-bold rounded-lg transition-colors ${className}`}
    onClick={onClick}
  >
    {children}
  </button>
);
