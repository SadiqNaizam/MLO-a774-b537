import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Send } from 'lucide-react';

interface FooterActionsProps {
  onPreviousClick?: () => void;
  onNextClick?: () => void;
  onSubmitClick?: () => void;
  canGoPrevious?: boolean;
  canGoNext?: boolean;
  isSubmitting?: boolean;
  showSubmit?: boolean; // If true, Next is replaced by Submit or Submit is shown alongside
  className?: string;
}

const FooterActions: React.FC<FooterActionsProps> = ({
  onPreviousClick,
  onNextClick,
  onSubmitClick,
  canGoPrevious = false,
  canGoNext = false,
  isSubmitting = false,
  showSubmit = false,
  className,
}) => {
  return (
    <div className={cn("flex items-center w-full", 
        showSubmit && !onNextClick && !onPreviousClick ? "justify-center" : "justify-between", // Center only if submit is the sole button
        className)}
    >
      {onPreviousClick && (
        <Button
          variant="outline"
          onClick={onPreviousClick}
          disabled={!canGoPrevious || isSubmitting}
          className="min-w-[120px]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Previous
        </Button>
      )}

      {/* Spacer to push Next/Submit to right if Previous is hidden and not centered single submit */} 
      { !onPreviousClick && (showSubmit ? !(!onNextClick && !onPreviousClick) : true) && <div/> }

      <div className="flex items-center gap-4">
        {onNextClick && !showSubmit && (
          <Button
            variant="default"
            onClick={onNextClick}
            disabled={!canGoNext || isSubmitting}
            className="min-w-[120px] bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Next
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        )}

        {onSubmitClick && showSubmit && (
          <Button
            variant="default"
            onClick={onSubmitClick}
            disabled={isSubmitting}
            className="min-w-[120px] bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
            {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
          </Button>
        )}
      </div>
    </div>
  );
};

export default FooterActions;
