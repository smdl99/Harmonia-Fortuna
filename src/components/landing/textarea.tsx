import { cn } from '@/utils/cn';

export default function Textarea({
  className,
  ...props
}: React.ComponentProps<'textarea'>) {
  return (
    <textarea
      className={cn(
        'bg-transparent resize-none border-b border-b-muted-foreground outline-none focus:border-b-primary transition-colors text-sm px-0.5 py-2',
        className,
      )}
      {...props}
    />
  );
}
