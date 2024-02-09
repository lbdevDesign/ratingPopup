import { render, screen, cleanup } from '@testing-library/react';
import Popup from '../popup';

afterEach(() => {
    cleanup();
})

test('should render popup component', () => {
    render(<Popup />);
    const popupElement = screen.getByTestId('popup-1');
    expect(popupElement).toBeInTheDocument();
})


