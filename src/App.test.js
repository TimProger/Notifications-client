import { render, screen } from '@testing-library/react';
import App from './App.jsx';

test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByPlaceholderText(/Navbar/i);
    expect(linkElement).toBeInTheDocument();
});
