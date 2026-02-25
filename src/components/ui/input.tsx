import { cn } from '@/utils/cn';

export default function Input({
  className,
  ...props
}: React.ComponentProps<'input'>) {
  return (
    <input
      className={cn(
        'bg-transparent border-b border-b-secondary outline-none focus:border-b-primary transition-colors text-sm px-0.5 py-2',
        className,
      )}
      {...props}
    />
  );
}
