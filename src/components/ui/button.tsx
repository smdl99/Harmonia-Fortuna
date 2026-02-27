'use client';

import { Slot } from '@radix-ui/react-slot';
import { VariantProps, cva } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const buttonVariants = cva('inline-flex items-center', {
  variants: {
    variant: {
      default:
        'text-secondary relative after:absolute after:w-full after:h-[1px] after:bg-secondary after:bottom-0 after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform transition-colors after:duration-300',
      outline:
        'disabled:opacity-50 text-sm text-primary border border-primary px-3 py-2 text-center justify-center hover:bg-primary disabled:hover:bg-transparent hover:text-white disabled:hover:text-primary dark:hover:text-black disabled:dark:hover:text-primary transition-colors font-semibold',
    },
    size: {
      default: '',
      sm: 'text-sm',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export default function Button({
  asChild = false,
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}
