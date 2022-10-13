import { Slot } from '@radix-ui/react-slot';
import { clsx } from 'clsx';
import { ReactNode } from 'react';

export interface TextProps {
    size?: 'sm' | 'md' |'lg';
    children: ReactNode;
    asChild?: boolean;
}

export function Text({size = 'md', children, asChild}: TextProps){
    
    const component = asChild ? Slot : 'span';
    
    return(
        <component className={
            clsx(
                'text-branco-200 font-sans',
                {
                    'text-xs': size == 'sm',
                    'text-sm': size == 'md',
                    'text-md': size == 'lg',
                }
            )}
        >
            {children}
        </component>

    )
}