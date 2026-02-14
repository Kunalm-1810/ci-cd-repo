import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

const App = () => <h1>Hello, World!</h1>;

describe('App Component', () => {
  test('renders Hello, World! heading', () => {
    render(<App />);
    const heading = screen.getByText(/Hello, World!/i);
    expect(heading).toBeInTheDocument();
  });
});
