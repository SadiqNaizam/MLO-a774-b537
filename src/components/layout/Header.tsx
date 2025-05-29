import React from 'react';
import { cn } from '@/lib/utils';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-10 flex h-[80px] items-center justify-between border-b border-border bg-card px-6 text-card-foreground",
        className
      )}
    >
      <div className="flex items-baseline gap-3"> 
        <span className="text-xl font-bold text-primary">ASCENDION</span>
        <span className="text-lg font-medium text-foreground">AIQ Assessment</span>
      </div>
      {/* This empty div ensures justify-between pushes the title to the left. 
          It can be replaced with actual header controls like theme toggles or user menus. */}
      <div></div> 
    </header>
  );
};

export default Header;
