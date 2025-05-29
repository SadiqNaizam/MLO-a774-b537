import React from 'react';
import { cn } from '@/lib/utils';

interface FooterProps {
  children?: React.ReactNode;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ children, className }) => {
  return (
    <footer
      className={cn(
        "flex h-[80px] items-center justify-center border-t border-border bg-card px-6 text-card-foreground",
        className
      )}
    >
      {children ? children : <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Ascendion. All rights reserved.</p>}
    </footer>
  );
};

export default Footer;
