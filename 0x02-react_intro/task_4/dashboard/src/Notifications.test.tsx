import { render, screen } from '@testing-library/react';
import Notifications from './Notifications';

test('should render notifications correctly', () => {
    const { container } = render(<Notifications />);

    expect(container).toBeInTheDocument();
})

test('should Notifications renders three list items', () => {
    const { container } = render(<Notifications />);
    const listItems = container.querySelectorAll('li');

    expect(listItems.length).toBe(3);
})

test('should notifications renders the correct text', async () => {
    render(<Notifications />);
    const toFind = await screen.findByText('Here is the list of notifications')

    expect(toFind).toBeInTheDocument();
})