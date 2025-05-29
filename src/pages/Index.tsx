import React, { useState } from 'react';
import MainAppLayout from '@/components/layout/MainAppLayout';
import QuestionCard, { Question } from '@/components/AssessmentForm/QuestionCard';
import AIQLevelIndicator, { AIQLevel } from '@/components/AssessmentForm/AIQLevelIndicator';
import FooterActions from '@/components/AssessmentForm/FooterActions';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Define dummy questions data based on the provided image
const dummyQuestions: Question[] = [
  {
    id: 'q1',
    number: '1',
    text: 'Tell me about a time when you adopted a new technology or tool on your own. What motivated you, and what was the result?',
    hint: 'Looks for curiosity and initiative',
  },
  {
    id: 'q2',
    number: '2',
    text: 'How do you stay up to date with new trends or tools in your field? Have you come across anything AI-related?',
    hint: 'Assesses awareness and interest',
  },
  {
    id: 'q3',
    number: '3',
    text: 'Have you experimented with any AI tools, even casually? (e.g., ChatGPT, image generators, automation bots)',
    hint: 'Gauges willingness to experiment',
  },
  {
    id: 'q4',
    number: '4',
    text: 'Can you think of a repetitive or time-consuming task in your role that could benefit from automation or AI?',
    hint: 'Tests ability to identify practical AI opportunities',
  },
  {
    id: 'q5',
    number: '5',
    text: 'Tell me about a time you had to change your way of working because of a new process or tool. How did you respond?',
    hint: 'Evaluates adaptability',
  },
  {
    id: 'q6',
    number: '6',
    text: 'Can you open an AI tool of your choice and show me how you would use it to solve something or get a result? Pls walk me through the process, step by step',
    hint: '', // No hint in the image for this one, but the field exists
  },
];

// Type for individual question answers
interface QuestionAnswer {
  questionId: string;
  value: 'relevant' | 'non-relevant' | null;
}

const AIQAssessmentPage: React.FC = () => {
  // State for question answers, initialized to null for all questions
  const [questionAnswers, setQuestionAnswers] = useState<QuestionAnswer[]>(
    dummyQuestions.map(q => ({ questionId: q.id, value: null }))
  );

  // State for AIQ Level
  const [selectedAIQLevel, setSelectedAIQLevel] = useState<AIQLevel | null>(null);

  // State for screener notes
  const [screenerNotes, setScreenerNotes] = useState<string>('');

  // State for submission status (example)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  // Handler for question value change
  const handleQuestionValueChange = (questionId: string, value: 'relevant' | 'non-relevant' | null) => {
    setQuestionAnswers(prevAnswers =>
      prevAnswers.map(ans =>
        ans.questionId === questionId ? { ...ans, value } : ans
      )
    );
  };

  // Handler for AIQ level change
  const handleAIQLevelChange = (level: AIQLevel | null) => {
    setSelectedAIQLevel(level);
  };

  // Handler for screener notes change
  const handleScreenerNotesChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScreenerNotes(event.target.value);
  };
  
  // Handler for submit
  const handleSubmit = () => {
    setIsSubmitting(true);
    console.log("Assessment Submitted:", {
      answers: questionAnswers,
      aiqLevel: selectedAIQLevel,
      notes: screenerNotes,
    });
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Assessment Submitted! Check console for data.");
      // Reset form or navigate away if needed
    }, 1500);
  };

  return (
    <MainAppLayout
      footerContent={
        <FooterActions
          onSubmitClick={handleSubmit}
          showSubmit={true}
          isSubmitting={isSubmitting}
        />
      }
    >
      {/* Page Title specific to Assessment, as seen in the image */}
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground">
          AI QUOTIENT (AIQ) ASSESSMENT
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mt-1">
          SCREENING AI-FRIENDLY TALENT
        </p>
      </div>

      {dummyQuestions.map((question) => {
        const currentAnswer = questionAnswers.find(ans => ans.questionId === question.id);
        return (
          <QuestionCard
            key={question.id}
            question={question}
            selectedValue={currentAnswer?.value || null}
            onValueChange={(value) => handleQuestionValueChange(question.id, value)}
          />
        );
      })}
      
      <AIQLevelIndicator
        selectedLevel={selectedAIQLevel}
        onLevelChange={handleAIQLevelChange}
      />

      {/* Screener Notes Section */}
      <div>
        <Label htmlFor="screener-notes" className="text-base font-medium text-foreground mb-2 block">
          Screener Notes / Comments:
        </Label>
        <Textarea
          id="screener-notes"
          value={screenerNotes}
          onChange={handleScreenerNotesChange}
          placeholder="Enter any additional notes or comments here..."
          className="min-h-[120px] bg-card border-border focus:ring-ring focus:border-ring"
          rows={4}
        />
      </div>

    </MainAppLayout>
  );
};

export default AIQAssessmentPage;
