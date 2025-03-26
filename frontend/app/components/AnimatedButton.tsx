import { motion } from "framer-motion";
import { Link } from "react-router";

interface AnimatedButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  external?: boolean;
  disabled?: boolean;
}

export default function AnimatedButton({
  href,
  onClick,
  children,
  variant = "primary",
  className = "",
  external = false,
  disabled = false,
}: AnimatedButtonProps) {
  const baseClasses = "relative px-8 py-4 rounded-lg font-medium overflow-hidden inline-block";
  const variants = {
    primary: {
      wrapper: "group",
      background: (
        <>
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600"></span>
          <span className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-25 
            bg-gradient-to-r from-violet-600 via-blue-500 to-purple-600 transition-opacity"></span>
        </>
      )
    },
    secondary: {
      wrapper: "",
      background: (
        <span className="absolute inset-0 w-full h-full bg-[var(--color-bg-secondary)]/70 hover:bg-[var(--color-bg-secondary)] 
          transition-colors border border-violet-600/30"></span>
      )
    }
  };

  const currentVariant = variants[variant];
  const allClasses = `${baseClasses} ${currentVariant.wrapper} ${className} ${disabled ? 'opacity-60 cursor-not-allowed' : ''}`;
  
  const content = (
    <>
      {currentVariant.background}
      <span className="relative flex items-center justify-center gap-2 text-[var(--color-text-primary)]">
        {children}
      </span>
    </>
  );

  if (disabled) {
    return <button disabled className={allClasses}>{content}</button>;
  }
  
  if (href) {
    if (external) {
      return (
        <a href={href} className={allClasses} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      );
    }
    
    return (
      <Link to={href} className={allClasses}>
        {content}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={allClasses}>
      {content}
    </button>
  );
}
