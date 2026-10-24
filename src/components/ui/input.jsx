import { cn } from '@/lib/utils'

function Input({
  className,
  type,
  ...props
}) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        // Keep the auth design tokens instead of shadcn's default size and ring.
        'box-border h-[var(--control-height)] w-full rounded-md border-[length:var(--border-width)] border-solid border-input bg-background px-[var(--space-fluid-md)] py-0 [font-family:inherit] text-[length:var(--font-size-small)] text-foreground',
        'placeholder:text-muted-foreground placeholder:opacity-100 focus-visible:[outline:var(--focus-ring-width)_solid_var(--color-primary)] focus-visible:outline-offset-[var(--focus-ring-offset)]',
        'disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  )
}

export { Input }
