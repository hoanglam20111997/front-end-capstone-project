import { render, screen } from "@testing-library/react";
import { BookingForm } from './components/BookingForm';

test('Renders the "Choose date" label', () => {
    // Mock the availableTimes prop with sample data
    const mockAvailableTimes = [
        '17:00',
        '18:00',
        '19:00',
        '20:00',
        '21:00',
        '22:00'
    ];

    render(<BookingForm availableTimes={mockAvailableTimes} />);
    const chooseDateLabel = screen.getByLabelText("Choose date");
    expect(chooseDateLabel).toBeInTheDocument();
});


initializeTimes = (state) => {
    const selectedDate = state.selectedDate;
    // You can implement logic here to fetch available times from an API based on the selected date.
    // For now, let's just return some example available times regardless of the date.
    const exampleAvailableTimes = ['17:00', '18:00', '19:00'];

    // Return a new state object with the availableTimes property updated based on the selected date
    return {
        ...state,
        availableTimes: exampleAvailableTimes,
    };
};

// Function to update available times based on the selected date
export const updateTimes = (state) => {
    const selectedDate = state.selectedDate;
    // You can implement logic here to fetch updated available times from an API based on the selected date.
    // For now, let's assume that the available times remain the same.
    const updatedAvailableTimes = state.availableTimes;

    // Return a new state object with the availableTimes property updated based on the selected date
    return {
        ...state,
        availableTimes: updatedAvailableTimes,
    };
};



test('initializeTimes returns the correct expected value', () => {
    const initialState = {
        availableTimes: [],
        selectedDate: '2023-07-04',
        // other state properties...
    };

    const expectedTimes = ['17:00', '18:00', '19:00']; // Example expected times
    const initializedState = initializeTimes(initialState);

    expect(initializedState.availableTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value as provided in the state', () => {
    const initialState = {
        availableTimes: ['17:00', '18:00', '19:00'],
        selectedDate: '2023-07-04',
        // other state properties...
    };

    const updatedState = updateTimes(initialState);

    expect(updatedState.availableTimes).toEqual(initialState.availableTimes);
});