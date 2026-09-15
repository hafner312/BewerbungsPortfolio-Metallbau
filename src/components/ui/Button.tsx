import type { ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** 'outlineLight' ist fuer dunkle Hintergruende gedacht */
  variant?: 'primary' | 'secondary' | 'ghost' | 'outlineLight'
  size?: 'sm' | 'md' | 'lg'
  as?: 'button' | 'a'
  href?: string
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  as: Tag = 'button',
  href,
  ...props
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-xl font-semibold transition-all duration-200 cursor-pointer active:scale-[0.98]'

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const variants = {
    primary:
      'text-white bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-light)] shadow-[0_4px_14px_rgba(13,148,136,0.35)] hover:shadow-[0_8px_24px_rgba(13,148,136,0.45)] hover:-translate-y-0.5',
    secondary:
      'border border-[var(--color-accent)] bg-white/60 backdrop-blur-sm text-[var(--color-accent-light)] hover:bg-[var(--color-accent-glow)] hover:-translate-y-0.5 shadow-[0_2px_10px_rgba(13,148,136,0.12)]',
    ghost:
      'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-elevated)]',
    outlineLight:
      'border border-white/35 bg-white/5 backdrop-blur-sm text-white hover:bg-white/15 hover:border-white/60 hover:-translate-y-0.5',
  }

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`

  if (Tag === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
