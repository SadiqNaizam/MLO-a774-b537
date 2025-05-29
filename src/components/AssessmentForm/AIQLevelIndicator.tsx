import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export type AIQLevel = 'High' | 'Medium' | 'Low';

const AIQ_LEVELS: AIQLevel[] = ['High', 'Medium', 'Low'];

interface AIQLevelIndicatorProps {
  selectedLevel: AIQLevel | null;
  onLevelChange: (level: AIQLevel | null) => void;
  className?: string;
}

const AIQLevelIndicator: React.FC<AIQLevelIndicatorProps> = ({
  selectedLevel,
  onLevelChange,
  className,
}) => {

  const handleLevelChange = (level: AIQLevel) => {
    if (selectedLevel === level) {
      onLevelChange(null); // Allow unselecting
    } else {
      onLevelChange(level);
    }
  };

  const checkboxBaseClass = "h-5 w-5 rounded-sm border-muted data-[state=checked]:bg-transparent data-[state=checked]:text-accentGreen data-[state=checked]:border-accentGreen focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background";

  return (
    <div className={cn("p-4 bg-card rounded-md", className)}>
      <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
        <Label className="text-base font-medium text-foreground mb-2 sm:mb-0">AIQ Level:</Label>
        <div className="flex items-center space-x-4">
          {AIQ_LEVELS.map((level) => (
            <div key={level} className="flex items-center space-x-2">
              <Checkbox
                id={`aiq-level-${level.toLowerCase()}`}
                checked={selectedLevel === level}
                onCheckedChange={() => handleLevelChange(level)}
                className={cn(checkboxBaseClass)}
                aria-label={`Select AIQ level ${level}`}
              />
              <Label htmlFor={`aiq-level-${level.toLowerCase()}`} className="text-sm font-medium text-foreground">
                {level}
              </Label>
            </div>
          ))}
        </div>
        <span className="text-xs text-muted-foreground mt-2 sm:mt-0 sm:ml-auto">
          (Auto calculated using above inputs)
        </span>
      </div>
    </div>
  );
};

export default AIQLevelIndicator;
