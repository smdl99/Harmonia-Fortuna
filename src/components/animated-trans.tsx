'use client';

import { useLanguageStore } from '@/store/language.store';
import { cn } from '@/utils/cn';
import { Slot } from '@radix-ui/react-slot';
import { useEffect, useRef, useState } from 'react';

interface AnimatedTransProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}

export default function AnimatedTrans({
  children,
  className,
  asChild,
}: AnimatedTransProps) {
  const Comp = asChild ? Slot : 'div';
  const { language } = useLanguageStore();
  const itemRef = useRef<HTMLDivElement>(null);
  const [classNameAnim, setClassNameAnim] = useState('');

  useEffect(() => {
    const itemElem = itemRef.current;
    if (!itemElem) {
      return;
    }

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setClassNameAnim('animate-fade-in-up');

    const handleAnimationEnd = () => {
      setClassNameAnim('');
    };

    itemElem.addEventListener('animationend', handleAnimationEnd);

    return () => {
      itemElem.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [language]);

  return (
    <Comp ref={itemRef} className={cn(classNameAnim, className)}>
      {children}
    </Comp>
  );
}
