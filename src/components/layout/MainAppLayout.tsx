import React from 'react';
import { cn } from '@/lib/utils';
import Header from './Header';
import Footer from './Footer';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string;
  footerContent?: React.ReactNode; 
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className, footerContent }) => {
  return (
    <div className={cn("grid min-h-screen grid-cols-1 grid-rows-[auto_1fr_auto] bg-background", className)}>
      <Header />
      {/* Main content area with padding for fixed header */}
      {/* Layout Requirements for mainContent: */}
      {/*   - overall.sizing.mainContent: "min-h-[calc(100vh-160px)]" (handled by grid 1fr row and min-h-screen) */}
      {/*   - mainContent.layout: "flex flex-col gap-8 px-8 bg-background" */}
      {/*   - mainContent.container: "max-w-[1200px] mx-auto" */}
      <main className="overflow-y-auto bg-background pt-[80px]"> 
        {/* Container to enforce max-width and centering */}
        <div className="mx-auto w-full max-w-[1200px]">
          {/* Inner div for padding, flex layout, and gap between children */}
          <div className="flex flex-col gap-8 px-8 py-8">
            {children}
          </div>
        </div>
      </main>
      <Footer>
        {footerContent}
      </Footer>
    </div>
  );
};

export default MainAppLayout;
