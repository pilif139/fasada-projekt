import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/svelte';
import SummaryPage from './+page.svelte';
import { points } from '$lib/pointsStore';
import { questions } from '$lib/questions';
import '@testing-library/jest-dom/vitest';

describe('Summary Page Component', () => {
  it('renders summary page matching with snapshot', () => {
    const {container} = render(SummaryPage);
    expect(container).toMatchSnapshot();
  });

  it('displays total points earned', () => {
    points.set({ points: 4, YourAnswers: [0,1,0,1] });
    render(SummaryPage);
    expect(screen.getByText('Total points earned:')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders each question with correct answer', () => {
    points.set({ points: 10, YourAnswers: [0, 1, 2, 2] });
    render(SummaryPage);
    questions.forEach((question) => {
      expect(screen.getByText(question.question)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(`Correct answer:\\s*${question.answers[question.correctAnswer]}`))).toBeInTheDocument();
    });
  });

  it('displays user\'s correct answer in green', () => {
    points.set({ points: 10, YourAnswers: [0, 1, 2, 2] });
    render(SummaryPage);
    let YourAnswers: number[];
    points.subscribe(value => YourAnswers = value.YourAnswers);
    questions.forEach((question, index) => {
      if (YourAnswers[index] === question.correctAnswer) {
        const elements = screen.getAllByText('You guessed this right')
        elements.forEach((element) => {
          expect(element).toHaveClass('text-green-500');
        });
      } else{
        const elements = screen.getAllByLabelText("wrong-answer");
        elements.forEach((element) => {
          expect(element).toHaveClass('text-red-500');
        });
      }
    });
  });
});