import React from 'react';
import { cn } from '@/lib/utils';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';

export interface Question {
  id: string;
  number: string;
  text: string;
  hint: string;
}

interface QuestionCardProps {
  question: Question;
  selectedValue: 'relevant' | 'non-relevant' | null;
  onValueChange: (value: 'relevant' | 'non-relevant' | null) => void;
  className?: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedValue,
  onValueChange,
  className,
}) => {
  const handleCheckboxChange = (type: 'relevant' | 'non-relevant') => {
    if (selectedValue === type) {
      onValueChange(null); // Uncheck if clicked again
    } else {
      onValueChange(type);
    }
  };

  const checkboxBaseClass = "h-6 w-6 rounded border-2 border-muted data-[state=checked]:bg-transparent data-[state=checked]:text-accentGreen data-[state=checked]:border-accentGreen focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-0 focus-visible:ring-offset-background";

  return (
    <Card className={cn("bg-card text-card-foreground w-full", className)}>
      <CardContent className="p-4 md:p-6">
        <div className="flex flex-row items-start gap-3 md:gap-4">
          <div className="text-xl font-bold text-secondary pt-0.5 tabular-nums">
            {question.number.padStart(2, '0')}
          </div>
          <div className="flex-grow">
            <p className="text-base text-foreground">
              {question.text}
            </p>
            {question.hint && (
              <p className="text-sm text-muted-foreground mt-1">
                ({question.hint})
              </p>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 ml-auto pl-2 pt-0.5">
            <div className="flex flex-col items-center space-y-1.5">
              <Label htmlFor={`${question.id}-relevant`} className="text-xs text-muted-foreground font-medium whitespace-nowrap">Relevant</Label>
              <Checkbox
                id={`${question.id}-relevant`}
                checked={selectedValue === 'relevant'}
                onCheckedChange={() => handleCheckboxChange('relevant')}
                className={cn(checkboxBaseClass)}
                aria-label={`Mark question ${question.number} as relevant`}
              />
            </div>
            <div className="flex flex-col items-center space-y-1.5">
              <Label htmlFor={`${question.id}-non-relevant`} className="text-xs text-muted-foreground font-medium whitespace-nowrap">Non-Relevant</Label>
              <Checkbox
                id={`${question.id}-non-relevant`}
                checked={selectedValue === 'non-relevant'}
                onCheckedChange={() => handleCheckboxChange('non-relevant')}
                className={cn(checkboxBaseClass)}
                aria-label={`Mark question ${question.number} as non-relevant`}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default QuestionCard;
