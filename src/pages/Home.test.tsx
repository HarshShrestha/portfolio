import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from './Home';
import { profile } from '../data/profile';

describe('Home Page', () => {
  it('renders the main heading', () => {
    render(<Home />);
    const heading = screen.getByText(profile.name);
    expect(heading).toBeInTheDocument();
  });
});
