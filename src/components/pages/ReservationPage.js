
import './../../css/Reservation.css'
import { BookingForm } from "../BookingForm";

export const ReservationPage = () => {
    return (
        <div className="reservation-w50 fh">
            <div>
                <h2 className='welcome-header'>Welcome to Little Lemon! Book a table:</h2>
                <BookingForm/>
            </div>
        </div>
    );
};