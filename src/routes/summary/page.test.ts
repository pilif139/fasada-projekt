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
    expect(screen.getByText('4')).toBeInTheDocument();
  });

  it('renders each question with correct answer', () => {
    points.set({ points: 10, YourAnswers: [0, 1, 2, 2] });
    render(SummaryPage);
    questions.forEach((question) => {
      expect(screen.getByText(question.question)).toBeInTheDocument();
      expect(screen.getByText(question.answers[question.correctAnswer])).toBeInTheDocument();
    });
  });
});