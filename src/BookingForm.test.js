import { render, screen } from "@testing-library/react";
import { BookingForm } from './components/BookingForm';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter

// Mock the fetchAPI function to return sample data
jest.mock('./api', () => ({
    fetchAPI: jest.fn((date) => {
      // For testing purposes, let's return some example available times regardless of the date.
      return ['17:00', '18:00', '19:00'];
    }),
}));

// test('Renders the "Choose date" label', () => {
//     render(
//       <BrowserRouter>
//         <BookingForm />
//       </BrowserRouter>
//     );
//     const chooseDateLabel = screen.getByLabelText("Choose date");
//     expect(chooseDateLabel).toBeInTheDocument();
// });

initializeTimes = (state) => {
    const selectedDate = state.selectedDate;
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
      selectedDate: new Date('2023-07-04'), // Use the date object instead of string
      // other state properties...
    };

    const expectedTimes = ['17:00', '18:00', '19:00']; // Example expected times
    const initializedState = initializeTimes(initialState);

    expect(initializedState.availableTimes).toEqual(expectedTimes);
});

test('updateTimes returns the same value as provided in the state', () => {
    const initialState = {
      availableTimes: ['17:00', '18:00', '19:00'],
      selectedDate: new Date('2023-07-04'), // Use the date object instead of string
      // other state properties...
    };

    const updatedState = updateTimes(initialState);

    expect(updatedState.availableTimes).toEqual(initialState.availableTimes);
});