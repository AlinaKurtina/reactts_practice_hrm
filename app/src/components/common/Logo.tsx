import logo from '@/assets/logo.svg';
import { cn } from 'cn';
import React from 'react';

function Logo({ className, ...props } : React.ComponentProps<"img">) {
    return <img src={logo} alt='logo' className={cn('w-55', className)} {...props} />
}

export default Logo;
