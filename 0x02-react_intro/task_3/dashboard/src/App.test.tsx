import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the app', () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
})

test('renders the header', () => {
    const { container } = render(<App />);
    const header = container.querySelector('.App-header');

    expect(header).toBeInTheDocument();
})

test('renders the body', () => {
    const { container } = render(<App />);
    const body = container.querySelector('.App-body');

    expect(body).toBeInTheDocument();
})

test('renders the footer', () => {
    const { container } = render(<App />);
    const footer = container.querySelector('.App-footer');

    expect(footer).toBeInTheDocument();
})